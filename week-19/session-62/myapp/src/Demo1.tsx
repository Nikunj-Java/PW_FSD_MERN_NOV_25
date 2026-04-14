import { useState } from 'react';

function Demo1(){
    const [users, setUsers] = useState([
        {id:1, name:"Nikunj Soni", age:25},
        {id:2, name:"Sushant", age:28},
        {id:3, name:"Priya", age:22}
    ]);

    const [show,setShow] = useState(true);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                Toggle Users
            </button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {show && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )


}
export default Demo1;