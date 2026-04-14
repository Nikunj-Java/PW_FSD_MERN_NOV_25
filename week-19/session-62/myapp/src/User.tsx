type Props={
    name:string;
};

function User({name}:Props){
    return <h1> Hello {name}!</h1>
}

export default User;