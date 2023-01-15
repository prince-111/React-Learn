
import {useState} from "react";

function IncreDecrement(){
    
    const[data, setData]= useState(1)
    
    function increment(){
       setData(data+2);
    }

    function decrease(){
        setData(data-1);
    }

    return(
        <>
          <h1>Increment & Decrement the value</h1>
          <h1>{data}</h1>
          <button onClick={decrease}>Decrease ⚒️</button> &nbsp;
          <button onClick={increment}>increase 🚀</button> 
        </>
    )
}
export default IncreDecrement;