import db from './mongo.js';

const users=db.collection('users');

/*
// 01 Insert Data
const result1= await users.insertOne({
    name:'Danish Akhtar',
    email:'danish@pw.live'});
console.log('Data inserted successfully:', result1);
*/
// 02. Read Data

const data= await users.find().toArray();

console.log('Data fetched successfully:', data);

// 03. Read Single Record
const user= await users.findOne({name:'Nikunj Soni'});

console.log('Data fetched successfully:', user);


//04 Update Data
const result= await users.updateOne({
    name:'Nikunj Soni'
},{
    $set:{email:'nikunjsoni.updated@pw.live'}
});
console.log('Data updated successfully:', result);

//05 Delete Data