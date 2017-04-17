import { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";

import { UserAccount } from "../models";
import { encodeJWT, verifyJWT } from "../helpers/crypto";
import {
  INVALID_RESOURCE, MISSING_RESOURCE,
  INVALID_JWT, FORGERY, UNKNOWN_ERROR
} from "../constants/errors";

export const requireAuth = (async (ctx, next) => {
    const token = ctx.cookies.get("bearerToken");
    if (!token) ctx.throw(400, MISSING_RESOURCE);
    let payload;
    try {
      payload = await verifyJWT(token);
    } catch(err) {
      if (err instanceof TokenExpiredError) return ctx.throw(403, INVALID_JWT);
      if (err instanceof JsonWebTokenError) return ctx.throw(403, INVALID_JWT);
      return ctx.throw(500, UNKNOWN_ERROR);
    }
    const { username, secret } = payload;
    if (!username || !secret) return ctx.throw(403, INVALID_RESOURCE)
    const hbAcct = await UserAccount.findOne({ where: { username } });
    if (!hbAcct) return ctx.throw(403, MISSING_RESOURCE);
    const { jwtSecret } = hbAcct.get();
    if (jwtSecret !== secret) return ctx.throw(403, FORGERY);
    ctx.state.account = hbAcct;
    await next();
});

export const refreshAuth = (async (ctx, next) => {
  const hbAcct = ctx.state.account;
  const { username, jwtSecret } = hbAcct.get();
  const token = await encodeJWT({ username, secret: jwtSecret });
  ctx.cookies.set("bearerToken", token);
  ctx.state.authed = true;
  await next();
});

export const deleteAuth = (async (ctx, next) => {
  ctx.cookies.set("bearerToken", null);
  ctx.state.authed = false;
  await next();
});
