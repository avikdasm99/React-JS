import { useState } from "react";
 
function P1(props){
    return(
        <>
        <h1>I love <b style={{color:'red'}}>{props.n}</b></h1>
        </>
    )
}

function Props1(){
    const[name,setName]=useState('React');
    return(
        <>
        <P1 n={name}/>         {/* value passing by props */}
        </>
    ) 
}
export  default Props1;