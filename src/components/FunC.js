
function FunC(){
    
    const text = 'Hello World'

    // function inside function bulid
    function Laptop(){
        return (
            <div>laptop is lightweight</div>
        )
     }

    return (
        <>
        <h1>Using Functional Component.</h1>
        <h2>second line of functional compponents</h2>
        <p>{text}</p>
          
        {/* we call function inside function but not outside*/}
        <Laptop/>

          <h2>{557*42}</h2>

        </>
    )
}

export default FunC;