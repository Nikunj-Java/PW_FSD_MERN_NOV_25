export const addUserAction =async ({request})=>{
    const formData= await request.formData();
    const name= formData.get("name");

    await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body: JSON.stringify({name}),
        headers:{"Content-Type":"application/json"}
    });
    alert("User Added Successfully")
    return null;
}