
import React, {Component} from 'react'

class StatewCc extends Component{

    constructor(){
        super();
        this.state={
            data:"SUN is ❓"
            // data:1
        }
    }
    SUN(){
        this.setState({data:"STAR 🔥"});
        // this.setState({data:this.state.data+1})
    }
   
    render(){
        return(
           <div>
            <h1>Hello from the state with class component</h1>
            <h2>{this.state.data}</h2>
            <button onClick={()=>this.SUN()}>IS</button>
           </div>
        );
    }
}

export default StatewCc;