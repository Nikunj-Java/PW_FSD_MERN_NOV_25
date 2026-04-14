type Props={
    name:string,
    age:number,
};

function UserCard({name,age}:Props){
    return(
        <div style={{border:"1px solid black",padding:"10px"}}>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    )
}
export default UserCard;