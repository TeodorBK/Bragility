const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'bragility',
});

app.get('/getAllEmployees', (req, res) => {
  const reqDepartment = req.query.department;
  let department = reqDepartment.toLowerCase();

  if (reqDepartment === 'User suport') {
    department = 'userSuport';
  } else if (reqDepartment === 'Hr and administration') {
    department = 'hrAndAdministration';
  }

  db.query(
    'SELECT * FROM employees WHERE department = ? OR department = "dailyLeader";',
    [department],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send('Ingen informasjon ble funnet');
      } else {
        res.send(result);
      }
    }
  );
});

app.put('/sendMessage', (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const phone = req.query.phone;
  const message = req.query.message;

  db.query(
    'INSERT INTO messages (messageName, messageEmail, messagePhone, messageMessage) VALUE(?, ?, ?, ?);',
    [name, email, phone, message],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send('Ingen informasjon ble funnet');
      } else {
        res.send(result);
      }
    }
  );
});

app.get('/getFaq', (req, res) => {
  db.query('SELECT * FROM faq', [], (err, result) => {
    if (err) {
      console.log(err);
      res.send('Ingen informasjon ble funnet');
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log('...');
});
