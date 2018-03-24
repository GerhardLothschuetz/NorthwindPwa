"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const SqlLite = __importStar(require("sqlite3"));
const db = new SqlLite.Database('D:/Git/NodeDemo/db/Northwind/Northwind.sl3');
db.serialize(() => {
    //db.run("CREATE TABLE lorem (info TEXT)");
    /*var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum1 " + i);
    }
    stmt.finalize();*/
    db.each("SELECT * FROM Customers", (err, row) => {
        console.log(row.CustomerID + ": " + row.CompanyName);
        //console.log(row.CompanyName);
    });
});
/*var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});*/
db.close();
//# sourceMappingURL=server.js.map