import { useEffect, useRef } from "react";

export default function UseEffect1(){
    const  r1=useRef();
    const  r2=useRef();
    useEffect(()=>{
        setTimeout(()=>{
            r1.current.innerText='Thank you for waiting have a nice day';
            r2.current.value='I love React'
        },5000)
    },[])

    return(
        <>
        <h1 ref={r1}>Wait for 5 seconds</h1>
        <input ref={r2} size={40} type="text" value='Tell  me your favourite programming language'/>
        </>
    )
}