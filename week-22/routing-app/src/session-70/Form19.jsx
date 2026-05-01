import SubmitButton from "./SubmitButton";

async function submitForm(formData) {
    const name= formData.get("name");
    alert(`Form submitted with name: ${name}`);
    
}
function Form19(){
    return(
        <div>
            <h1>React 19 Form Example</h1>
            <form action={submitForm}>
                <input name="name" placeholder="Enter Name"/>
                {/* <button type="submit">Submit</button> */}
                <SubmitButton/>
            </form>
        </div>
    )
}

export default Form19;