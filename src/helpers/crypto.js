import _ from "lodash";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import config from "../../config";
const { jwtSecret } = config.crypto;

export const seedRandom = (bytes=16) => new Buffer(crypto.randomBytes(bytes));

export const encodePBKDF2 = payload => new Promise((resolve, reject) => {
  crypto.pbkdf2(
    payload, seedRandom(), 100000, 512, "sha512",
    (err, cipher) => {
      if (err) return reject(err);
      resolve(cipher);
    }
  );
});

export const comparePBKDF2 = (async (payload, cipher) => {
  return (cipher === await encodePBKDF2(payload));
});

export const encodeJWT = (async (payload, opts={}) => {
  opts = _.defaults(opts, { ttl: "15m" });
  const token = await jwt.sign(payload, jwtSecret, { expiresIn: opts.ttl });
  return token;
});

export const verifyJWT = (async token => {
  const payload = await jwt.verify(token, jwtSecret);
  return payload;
});
