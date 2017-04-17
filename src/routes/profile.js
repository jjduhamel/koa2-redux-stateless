import _ from "lodash";
import koaRouter from "koa-router";

import { UserAccount } from "../models";
import { DUPLICATE_RESOURCE, INVALID_RESOURCE, MISSING_RESOURCE } from "../constants/errors";
import { requireAuth } from "../middleware/auth";

const router = new koaRouter();
export default router;

router.get("/profile", requireAuth, async ctx => {
  const hbAcct = ctx.state.account;
  ctx.body = { profile: hbAcct.get("profile") };
});

router.post("/profile", requireAuth, async ctx => {
  const hbAcct = ctx.state.account;
  const { email, firstName, lastName, phoneNumber } = ctx.request.body;
  await hbAcct.update(
    _.pickBy({ email, firstName, lastName, phoneNumber })
  );
  ctx.body = { profile: hbAcct.get("profile") };
});
