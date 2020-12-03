const query = require("../util/connectDb");

class BookModel {
  addBookAction(params){
    let _sql = "INSERT INTO `modemvcbook` (`num`, `bookname`, `id`) VALUES ('"+params.num+"', '"+params.bookname+"', NULL);";
    return new Promise(function(resolve){
      query(_sql).then(()=>{
        resolve();
      });
    })
  }
  getBookListAction(){
    let _sql = `SELECT * FROM modemvcbook `;
    return new Promise(function(resolve){
      query(_sql).then(data=>{
        let string=JSON.stringify(data); 
        let res = JSON.parse(string)
        resolve(res);
      });
    })
  }
}
module.exports = BookModel;