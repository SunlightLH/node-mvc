const Controller = require('./Controller');
class IndexController extends Controller{
  constructor(){
    super();
  }
  async indexAction(ctx){
    await ctx.render("index.html",{
      title:"nodeMvcIndex",
      modeData:"data"
    })
  }
  async vueAction(ctx){
    await ctx.render("vue.html")
  }
}
module.exports = IndexController;