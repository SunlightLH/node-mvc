const Koa = require("koa");
const path = require("path");
const co = require("co");
const static = require("koa-static");
const swig = require("koa-swig");
const initController = require("./controller");
const bodyParser = require("koa-bodyparser");
const ErrorHandler = require("./middlewares/ErrorHandler");
const { historyApiFallback } = require("koa2-connect-history-api-fallback");
const app = new Koa();

app.context.render = co.wrap(swig({
  root:path.resolve(__dirname,'../web')
}))

app.use(static(path.resolve(__dirname,'../web/assets')));
app.use(historyApiFallback({ index: "/", whiteList: ["/index","/user",'book'] }));
app.use(bodyParser())
/**初始化路由 */
ErrorHandler.error(app);
initController(app);

app.listen(3000,()=>{
  console.log("server started......")
})