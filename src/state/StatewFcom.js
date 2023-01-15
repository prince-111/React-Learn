// we use state beacuse of not upadate value with variable not possible.
// state is a data container.
import {useState} from "react";
function StatewFcom(){
   
    const [data, setData] = useState("Alpha")
    function updateData(){
        setData("PRINCE !!")
    }
     
    return(
        <>
          <h1>State With Functional Components. ! </h1>
         <h1>{data}</h1>
         <button onClick={updateData}>update Data 🎸</button>
        </>
    )
}
export default StatewFcom;