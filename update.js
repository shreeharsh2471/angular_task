const express = require('express');
const { Client } = require('pg');
const fs=require('fs')
const bodyparser=require('body-parser')

const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/mydb2';
//"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('port', process.env.PORT || 3000);



// app.get('/', function (req, res, next) {
//     fs.readFile(__dirname+'/'+'',(err,data)=> {
//         res.end(data);
//     });
// });
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.get('/', function (req, res) {
    // var empid=(req.body.empid);
    // var salary=(req.body.salary);

    client.query(`select * from employee1`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
    
});



app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});