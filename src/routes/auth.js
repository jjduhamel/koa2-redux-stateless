import koaRouter from "koa-router";

import { UserAccount } from "../models";
import { encodePBKDF2, comparePBKDF2 } from "../helpers/crypto";
import { DUPLICATE_RESOURCE, INVALID_RESOURCE, MISSING_RESOURCE } from "../constants/errors";
import { requireAuth, refreshAuth, deleteAuth } from "../middleware/auth";

const router = new koaRouter();
export default router;

router.post("/auth/register", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password)
    ctx.throw(400, MISSING_RESOURCE);
  let hbAcct = await UserAccount.findOne({ where: { username } });
  if (hbAcct)
    ctx.throw(409, DUPLICATE_RESOURCE);
  const passwordHash = await encodePBKDF2(password);
  hbAcct = await UserAccount.create({ username, passwordHash });
  ctx.state.account = hbAcct;
  ctx.body = { account: hbAcct.get("summary") };
  await next();
}, refreshAuth);

router.post("/auth/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password)
    ctx.throw(400, MISSING_RESOURCE);
  let hbAcct = await UserAccount.findOne({ where: { username } });
  if (!hbAcct)
    ctx.throw(401, MISSING_RESOURCE);
  let { passwordHash } = hbAcct.get();
  if (!comparePBKDF2(password, passwordHash))
    ctx.throw(401, INVALID_RESOURCE);
  ctx.state.account = hbAcct;
  ctx.body = { account: hbAcct.get("summary") };
  await next();
}, refreshAuth);

router.post("/auth/refresh", (ctx, next) => {
  ctx.status = 201;
}, refreshAuth);

router.post("/auth/logout", deleteAuth, ctx => {
  ctx.status = 201;
});
