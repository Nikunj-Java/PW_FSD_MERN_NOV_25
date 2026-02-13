let today= new Date();
console.log(today); // this will gives entire date and time

//get the year
let date= new Date();
console.log("Year:",date.getFullYear()); 

//get the month
console.log("Month:", date.getMonth()); // 0-11 (jan=0)

//get the Day of month
console.log("Day of Month:",date.getDate()); //1-31

//get the Hours 
console.log("Hours:",date.getHours()); //0-23

//get Minutes
console.log("Minutes:",date.getMinutes());

//get Seconds
console.log("Seconds:",date.getSeconds());

//get Milliseconds
console.log("Milliseconds:",date.getMilliseconds());

//formate date

let d= new Date();

let formattedDate= d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
console.log("Formatted Date:",formattedDate);

//Set Date Values

let newdate= new Date();
newdate.setFullYear(2030);
newdate.setMonth(5);
newdate.setDate(15);
console.log("Updated Date:",newdate);