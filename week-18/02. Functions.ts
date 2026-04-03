let a:number= 10;
let b:number= 20;

function add(a:number,b:number):number{
    return a+b;
}

console.log(add(a,b));
//console.log(add(a,"10")); X Error
// run:  npx tsx app.ts