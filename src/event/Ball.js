
function Ball(){
    const hit =(h)=>{
        alert(h);
    }

    return( 
        <>
        <h2>perform event in react </h2>
        <h3>play cricket</h3>
        <button onClick={()=> hit("Six !")}>play</button>
        </>
    )
}
export default Ball;