const Router = require("koa-router");
const IndexController = require("./IndexController");
const UserController = require('./UserController');
const BookController = require("./BookController");
const indexController = new IndexController();
const userController = new UserController();
const bookController = new BookController();

const router = new Router();

function initController(app){
  router.get("/",indexController.vueAction)
  router.get("/index",indexController.indexAction)
  router.get("/user",userController.userAction)
  router.get("/book",bookController.bookHtml)
  router.get("/booklist",bookController.getListAction)
  router.get("/addbook",bookController.addBookAction)
  app.use(router.routes()).use(router.allowedMethods());
}
module.exports = initController;
