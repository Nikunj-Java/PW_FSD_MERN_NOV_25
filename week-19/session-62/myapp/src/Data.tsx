const data=["HTML","CSS","JavaScript","React","NodeJS","MongoDB"]
//const data1=[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"},{id:4,name:"React"},{id:5,name:"NodeJS"},{id:6,name:"MongoDB"}]
function Data(){
    return (<div>
        {data.map((data,index)=>(
            <h2 key={index}>{data}</h2>
        ))}
    </div>
    );
    // return (<div>
    //     {data1.map((data)=>(
    //         <h2 key={data.id}>{data.id}-{data.name}</h2>
    //     ))}
    // </div>
    // );
}

export default Data;