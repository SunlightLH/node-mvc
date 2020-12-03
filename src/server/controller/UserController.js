const Controller = require("./Controller");

class UserController extends Controller{
  constructor(){
    super();
  }
  userAction(ctx){
    ctx.body = [
      {name:"何炅",jobNum:"123"},
      {name:"谢娜",jobNum:"456"}
    ];
  }
}
module.exports = UserController;