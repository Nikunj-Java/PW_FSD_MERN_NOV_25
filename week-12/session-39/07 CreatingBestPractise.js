try {

    let password= "123";

    if(password.length <6 ){
        throw new Error("Password must be at least 6 characters long.");
    }
    
} catch (error) {
    console.error("Error Name:",error.name);
    console.error("Error Message:",error.message);
}