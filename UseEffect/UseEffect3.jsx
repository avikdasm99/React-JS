import { useEffect, useState } from "react";

export default  function UseEffect3(){
    const[fullname,setfullname]=useState('Avik das');

    useEffect(()=>{

        const timer= setInterval(()=>{
            setfullname('Swami Vivekananda')},5000)
        return ()=> clearInterval(timer);
    },[])

    return(
        <>
        <h1>Wait  for 5 seconds</h1>
        <h1>My name is {fullname}</h1>
        </>
    )
}