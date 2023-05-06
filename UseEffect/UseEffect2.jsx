import { useEffect, useState } from "react"

 const  UseEffect2=()=>{
    const [count,setcount]=useState(0);

    const valupd=()=>{
        setcount(count+1);
    }

    useEffect(()=>{
        document.title=` you  clicked ${count} times `;
    },[count])

    
    return(
        <>
        <h1>You clicked {count} times</h1>
        <button onClick={valupd}>Click</button>
        </>
    )
}
export  default  UseEffect2;