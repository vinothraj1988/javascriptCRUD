const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
const SERVER_ID = process.env.SERVER_ID || '0.0.0.0';
const bodyParser = require('body-parser');
var mysql = require('mysql');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To parse json data
app.use(bodyParser.json());
// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tech@123',
  database: 'demo'
  });
  // connect to database
dbConn.connect(); 

// Retrieve all users 
app.get('/users', function (req, res) {
  let sql = 'SELECT * FROM users'
  dbConn.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.status(200).send({ error: false, data: results, message: 'users list.' });
    });
});

// Retrieve user with id 
app.get('/user/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
    return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'users list.' });
  });
});

// Add a new user  
app.post('/adduser', function (req, res) {
  if (!req.body.user) {
    return res.status(400).send({ error:true, message: 'Please provide user' });
  }
	
 let sql = 'INSERT INTO users(name, email) VALUES(?, ?)';
  dbConn.query(sql,[req.body.user.name, req.body.user.email] , function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
    return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
  });
});
  //  Update user with id
app.put('/updateuser', function (req,  res) {
  let user_id = req.body.user_id;
  let user = req.body.user;
  if (!user_id || !user) {
    return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
  }
  let sql = 'UPDATE users SET name = ? WHERE id = ?';
  dbConn.query(sql, [user, user_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
  });
});
  //  Delete user
app.delete('/deleteuser', function (req, res) {
  let user_id = req.body.user_id;
  if (!user_id) {
    return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  let sql = 'DELETE FROM users WHERE id = ?';
  dbConn.query(sql, [user_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
  });
}); 


app.use((req, res, next) => {
  console.log('Incoming request to:', req.url);
  next();  
});

app.get("/", (req, res) => {
  res.send({ server: SERVER_ID, port: PORT });
});

app.use('/home', (req, res, next) => {
  console.log('A new request received by home ' + Date.now());
  next();
});

app.get('/home', (req, res) => {
  console.log("home")
  res.send('Home Page');
});

app.get("/status", (req, res) => {
    res.status(200).json({status: 'ok'});
});

app.post('/postdata', function (req, res) {
  res.status(200).send(JSON.stringify(req.body) );
});

app.get('/getdata/:id', (req, res) => {
  res.send(req.params);
});
app.get('/getcars', (req, res) => {

  const  data = {
    tables: {
      people: [
       {id: 1, name: "John", age: 32},
       {id: 2, name: "Peter", age: 29},
      ],
      cars: [
        {id: 1, brand: "Jeep", model: "Cherokee", owner_id: 2},
        {id: 2, brand: "BMW", model: "X5", owner_id: 2},
        {id: 3, brand: "Volkswagen", model: "Polo", owner_id: 1},
      ],
    },
  }

  res.send(data.tables.cars);
});

app.get('/getcars/:id', (req, res) => {
 
  const  data = {
    tables: {
      people: [
       {id: 1, name: "John", age: 32},
       {id: 2, name: "Peter", age: 29},
      ],
      cars: [
        {id: 1, brand: "Jeep", model: "Cherokee", owner_id: 2},
        {id: 2, brand: "BMW", model: "X5", owner_id: 2},
        {id: 3, brand: "Volkswagen", model: "Polo", owner_id: 1},
      ],
    },
  }
  res.send(data.tables.cars.filter(car => car.id == req.params.id));
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});
app.get('/fib/:n', function (req, res) {
  const n = req.params.n;
  console.log('Calculating fibonacci for', n);
  const result = fibonacci(n);
  res.status(200).send(JSON.stringify(result) );
});

const fibonacci = (num) => {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
