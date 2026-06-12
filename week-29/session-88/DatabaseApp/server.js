import connection from './dbconnect.js';

const sql="INSERT INTO users(name,email) VALUES(?,?)"; // ? is used for dynamic data

connection.query(sql,['Sushant','sn@pw.live'],(err,results)=>{
    if(err){
        console.error('Error inserting data:', err);
        return;
    }
    console.log('Data inserted successfully:', results);
});