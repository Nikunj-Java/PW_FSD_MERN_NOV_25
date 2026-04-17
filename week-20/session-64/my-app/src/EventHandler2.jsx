const EventHandler2 = () => {
    const handleChange= (e)=>{
        console.log("Input Changed",e.target.value);
    }
    return <input type="text" onChange={handleChange} />
}

export default EventHandler2;