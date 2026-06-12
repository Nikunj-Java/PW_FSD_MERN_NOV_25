import connection from './dbconnect.js';
/*
//01. InsertData
const sql="INSERT INTO users(name,email) VALUES(?,?)"; // ? is used for dynamic data

connection.query(sql,['Sushant','sn@pw.live'],(err,results)=>{
    if(err){
        console.error('Error inserting data:', err);
        return;
    }
    console.log('Data inserted successfully:', results);
});
*/
//02. READ Data
const sql2="SELECT * FROM users";

connection.query(sql2,(err,results)=>{
    if(err){
        console.error('Error fetching data:', err);
        return;
    }
    console.log('Data fetched successfully:', results);
});

// 03. Read Single Record
const sql3= "SELECT * FROM users WHERE id=?";

connection.query(sql3,[2],(err,results)=>{
    if(err){
        console.error('Error fetching data:', err);
        return;
    }
    console.log('Data fetched successfully:', results);
});

// 04. Update Data
const sql4= "UPDATE users SET name=? WHERE id=?";

connection.query(sql4,['Sushant Kumar',2],(err,results)=>{
    if(err){
        console.error('Error updating data:', err);
        return;
    }
    console.log('Data updated successfully:', results);
});
 
// 05. Delete Data
const sql5= "DELETE FROM users WHERE id=?";

connection.query(sql5,[2],(err,results)=>{
    if(err){
        console.error('Error deleting data:', err);
        return;
    }
    console.log('Data deleted successfully:', results);
}); 