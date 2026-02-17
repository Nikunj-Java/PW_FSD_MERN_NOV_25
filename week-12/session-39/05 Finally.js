let age= 15;

try {
    if(age<18){
        throw new Error("You Are not eliglible!");
    }
    console.log("Access Granted!");
} catch (error) {
    console.log("Error Name:",error.message)
} finally{
    console.log("This block will always execute.");
}