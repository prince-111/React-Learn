
// alert("hello welcome");
function Events(){

    function pen(){
        alert("pen is blue");
    }

    return(
        <>
        <h1> call from the event.</h1>
        <h3> perform event in react</h3>
         
         <button onClick={pen}>click me</button> <br />
         <button onClick={()=>pen()}>click me by arrow fun.</button> <br />
         <button onClick={()=> alert("perform Arrow Function")}>Arrow Fun..</button>
         
        </>
    )
}

export default Events;