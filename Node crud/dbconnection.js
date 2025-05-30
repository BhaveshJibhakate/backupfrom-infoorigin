//requirment createconnection to create connection object .connect method to apply on connection object

const mysql2=require("mysql2")

const mysqlconnection=mysql2.createConnection({
    host:'127',
    user:'root',
    password:"root123",
    port:3306
})

mysqlconnection.connect();


module.exports=mysqlconnection