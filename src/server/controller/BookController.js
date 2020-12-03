const Controller = require("./Controller");
const BookModel = require('../models/BookModel');
const bookModel = new BookModel();

class BookController extends Controller{
  async bookHtml(ctx){
    await ctx.render("book.html");
  }
  async getListAction(ctx){
    await bookModel.getBookListAction().then(data=>{
      ctx.body = data;
    })
  }
  async addBookAction(ctx){
    let params = JSON.parse(JSON.stringify(ctx.query));
    // 获取post参数：console.log('参数',ctx.request.body)
    await bookModel.addBookAction(params).then(()=>{
      ctx.body = "成功";
    })
  }
}
module.exports = BookController;