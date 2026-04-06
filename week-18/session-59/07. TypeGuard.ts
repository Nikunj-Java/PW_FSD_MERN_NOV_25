// problem
function print(val: string | number) {
    console.log(val.length); // Error: Property 'length' does not exist on type 'string | number'.
}
// solution
function print(val: string | number){
    if( typeof val === 'string' ) {
        console.log(val.length);
    } else {
        console.log(val); // number
    }
}
print('Hello'); // Output: 5
print(123); // Output: 123

// Other Type Guards: 'in operator
type ADMIN= {role:string};
type USER= {name:string};

function check(person: ADMIN | USER){
    if("role" in person){
        console.log("Admin role: ",person.role);
    }else{        
        console.log("User name: ", person.name);
    }
}
check({role: 'admin'}); // Output: Admin role: admin
check({name: 'Alice'}); // Output: User name: Alice