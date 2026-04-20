import { useState } from "react";

const Form =()=> {
    const [formData,setFormData]= useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        const {name, value}=e.target;

        setFormData({
            ...formData,[name]:value,
        });

    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert( `Email: ${formData.email}\n Password: ${formData.password}`);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                 type="email" 
                 name="email" 
                 value={formData.email} 
                 onChange={handleChange}/>

                 <label>Password:</label>
                 <input
                 type="password" 
                 name="password" 
                 value={formData.password} 
                 onChange={handleChange}/>

                 <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Form;