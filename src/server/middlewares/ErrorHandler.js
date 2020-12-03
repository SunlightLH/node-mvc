class ErrorHandler{
  static error(app){
    app.use(async (ctx,next)=>{
      try{
        await next();
      }catch(e){
        ctx.body = "500请求,正在积极修复....."
      }
    })
    app.use(async (ctx,next)=>{
      await next();
      if(ctx.status == 404){
        ctx.body = "页面找不到"
      }
    })
  }
}
module.exports = ErrorHandler;