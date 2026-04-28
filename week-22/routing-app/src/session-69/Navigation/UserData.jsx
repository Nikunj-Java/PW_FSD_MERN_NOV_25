import { useGetUsersQuery } from "../features/apiSlice";

const UserData=()=>{
    const {data,error,isLoading}= useGetUsersQuery();

    if(isLoading) return <p>Loading....</p>
    if(error) return <p>Error Loading Page</p>
    //console.log(data);
    
    return(
        <div>
            <h2>User Data</h2>
            {data.map(user=>(
            <p key={user.id}>{user.name}</p>
        ))}
        </div>
    )


}
export default UserData;