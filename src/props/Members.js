
function Members(props){

    return(
        <>
        <h1>Pass Function as Props</h1>
        <h1>User Component</h1>
        <button onClick={props.data}>call data</button>
        </>
    )
}

export default Members;