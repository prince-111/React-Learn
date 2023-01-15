 // we can send function as a props,  yes.
import React from 'react'
import { useState } from 'react'

export default class Student extends React.Component{
  
   constructor(){
    super();
    this.state={
        name:"Prince"
    }
   }


    render(){
        return(
            <>
            <h1>Props using class component !</h1>
            <div style={{backgroundColor:"pink", margin:20}}>Student {this.props.name}</div>
            <div>Email: {this.props.email}</div>   
            
          <h1>{this.state.name}</h1>  
            <button onClick={()=>this.setState({name:"Heyy...!"})}>Update</button>

            </>
        )
    }
}