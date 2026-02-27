let users= JSON.parse(localStorage.getItem("users"))|| [];

//register user
function registerUser(){
    try {
        let username= document.getElementById("username").value.trim();
        let email= document.getElementById("email").value.trim();
        let password= document.getElementById("password").value.trim();
        if(!username || !email || !password){
            throw new Error("All Fields Are Required");
        }
        validateEmail(email); // function to be prepared
        validatePassword(password);// function to be prepared

        let emailExists= users.some(user=>user.email === email);
        if(emailExists){
            throw new Error("Email alreday registered!");
        }
        users.push({username,email});
        localStorage.setItem("users",JSON.stringify(users));
        showMessage("User Registered Successfully","success");// function to be prepared
        clearInputs();// function to be prepared
        displayUsers();// function to be prepared
    } catch (error) {
        showMessages(error.message,"error")
    }
}

//Email Validation
function validateEmail(email){
    let emailRegex=/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
    if(!emailRegex.test(email)){
        throw new Error("Invalid Email Format");
    }
}
//password validation using regex
function validatePassword(password){
    let passwordRegex=/^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if(!passwordRegex.test(password)){
        throw new Error("Password must be atleast 6 character long,includes 1 uppercase and 1 number ")
    }
}
// display users
function  displayUsers(){
    let table= document.getElementById("userTable");
    table.innerHTML="";
    users.forEach((user,index)=>{
        table.innerHTML +=`
        <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button class="delete-btn" onclick="deleteUser(${index})">delete</button>
            </td>
        `
    })
}

//delete users
function deleteUser(index){
    users.splice(index,1);
    localStorage.setItem("users",JSON.stringify(users));
    displayUsers();
}

//helpers
function clearInputs(){
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("password").value="";
}
function showMessages(msg,type){
    let message= document.getElementById("message");
    message.textContent=msg;
    message.className=type;
}

displayUsers();