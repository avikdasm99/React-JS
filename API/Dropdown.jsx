import axios from "axios";
import { useEffect, useState } from "react";

export default function Dropdown(){
    const[info,setinfo]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(
            (res)=>{ setinfo(res.data)}
        )
        .catch(
            (err)=>{console.log(err)}
        )
    })
    return(
        <>
        Select Your Email <select>
            {
                info.map((val)=>{
                    return(
                        <option>{val.email}</option>
                    )
                })
            }
        </select>
        
        </>
    )
}