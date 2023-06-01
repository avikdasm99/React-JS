import axios from "axios";
import { useEffect, useState } from "react";

export default function List2(){
    const[info,setinfo]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            (res)=>{ setinfo(res.data) }
        )
        .catch(
            (err)=>{console.log(err)}
        )
    },[])
    return(
        <>
        {
            info.map((val,index)=>{
                return(
                    <>
                    <h1>Person={index+1}</h1>
                   <ul>
                      <li>Name={val?.name}</li>
                      <li>Address={val?.address?.city}</li>
                      <li>email={val?.email}</li>
                   </ul>
                    </>   
                )
            })
        }
        </>
    )
}