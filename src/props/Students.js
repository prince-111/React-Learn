import React, {useState} from 'react';

function Students(props){
    
    const [name, setName]=useState("How Are You")

    console.warn(props.name)
    return(
        <div style={{backgroundColor: 'skyblue', margin:10}}>
            <h1>Props in React :)</h1>
            <h2>Student Component Using props</h2>
            <h2>Hello, {props.name}</h2>
            <h3>Email: {props.email}</h3>

            {/* <h3>Address:{props.other.address}</h3>   */}
           <h3>{name}</h3> 
           <button onClick={()=>{setName("Fine !")}}>update</button>
        </div>
    )
}

export default Students;
