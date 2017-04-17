import koa from "koa";
import koaLogger from "koa-logger";
import koaStatic from "koa-static";

import router from "./router";

// Load the models
import "./models";

const app = module.exports = new koa();

app.use(koaLogger("dev"));
app.use(koaStatic(__dirname+"/../dist"));
app.use(koaStatic(__dirname+"/../public"));
app.use(router.routes());
