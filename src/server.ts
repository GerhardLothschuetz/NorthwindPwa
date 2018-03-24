import * as SqlLite from 'sqlite3';

const db = new SqlLite.Database('D:/Git/NodeDemo/db/Northwind/Northwind.sl3');
db.serialize(() =>{
    //db.run("CREATE TABLE lorem (info TEXT)");
    /*var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum1 " + i);
    }
    stmt.finalize();*/
        
    db.each("SELECT * FROM Customers", (err, row) => {
             console.log(row.CustomerID + ": " + row.CompanyName);
             //console.log(row.CompanyName);
   
   

   
    })
    
})

console.log("fick Dich");
db.close();