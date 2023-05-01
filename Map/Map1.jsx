import {useState} from "react";
function Map1(){
    const[data,setData]=useState(
        {
            degree:['mca','mba','bsc','bcom','ba','mcom','btech']
        }
    )
    return(
        <>
         <ol>
            {
                data.degree.map((val)=>{
                    return(
                        <li>{val}</li>
                    )
                })
            }
         </ol>
        </>
    )
}
export  default Map1;