# Install MySQL2
- goto your project and install mysql2 library 
```
npm install mysql2
```
## Create Database in MYSQL(Using MySQL CLI/Workbench)
```
CREATE DATABASE company;
```
## Use Database
```
use company;
```

## Create Table 
```
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100)
);
```
## Create Database Connection Object
- dbconnect.js
```
// refer the notes and then poroceed with the code
import mysql from 'mysql2';

const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nikunj@123',
    database:'company',
});

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
})

export default connection;
```

- Now use it in server.js file
- server.js
```
import connection from './dbconnect.js';

```
