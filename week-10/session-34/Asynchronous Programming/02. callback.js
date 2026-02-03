// it is a funcion passed as an argument to another function
function loadData(){
    setTimeout(function(){
        console.log("Data Loaded!");
    }, 3000);
}

function greet(name,callback){
    console.log("Hello "+ name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

greet("Nikunj Soni",sayBye)