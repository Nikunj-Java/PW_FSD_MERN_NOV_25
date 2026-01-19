// object Literal
let person= {
    name: "Nikunj Soni",
    empId: 12,
    city: "Mumbai",
    details: function(){
        console.log("Hello Everyone!");
    }
};
// access the objeect
console.log("Name:",person.name);
console.log("Emp Id:",person.empId);
console.log("City:",person.city);
person.details();

//alternate way: Bracket Notation
console.log(person["name"]);

person.empId=20;
person.city="Pune";
console.log("------------------Afte Modification----------------")
console.log("Emp Id:",person.empId);
console.log("City:",person.city);

// loop in object

for(let key in person){
    console.log(key,person[key]);
}

//real world example
let movie= {
    title: "Avatar",
    rating: 9,
    genere: "SCI-FI",
    play(){
        console.log(this.title+" is Playing....");
    }
}
console.log(movie);

movie.play();
// adding an item to the object
movie.length="2.5 hours";
movie["country"]= "India";
console.log(movie);

movie.details= function(){
    console.log("This is Movie Details");
    console.log("Title:"+this.title+"\n -Genere:"+this.genere+" \n -Country:"+this.country);
}

movie.details();

//remove from object

delete movie.country;
console.log(movie);
