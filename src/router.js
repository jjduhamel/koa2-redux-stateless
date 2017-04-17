import { debug } from "./debug";

import koaRouter from "koa-router";
import koaBody from "koa-body";
import koaViews from "koa-views";

import auth from "./routes/auth";
import profile from "./routes/profile";
import { requireAuth } from "./middleware/auth";
import { INVALID_RESOURCE, MISSING_RESOURCE, FORGERY } from "./constants/errors";

export const router = new koaRouter();
export default router;

router.use(koaViews(__dirname+"/views"));

router.get("/", async (ctx, next) => {
  let initialState = {};
  try { await next(); } catch(err) {}
  let hbAcct = ctx.state.account;
  if (hbAcct) {
    initialState = { authed: true, account: hbAcct.get("summary") };
  } else {
    initialState = { authed: false };
  }
  await ctx.render("index.ejs", { initialState });
}, requireAuth);

router.all("/health", async ctx => {
  ctx.body = "OK";
});

router.all("/boom", async ctx => {
  throw new Error("BOOM!");
});

router.use(koaBody());
router.use(auth.routes());
router.use(profile.routes());
