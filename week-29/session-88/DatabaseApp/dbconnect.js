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