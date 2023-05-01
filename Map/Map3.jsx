import { useState } from "react";

function Map3(){
    const[data,setdata]=useState('')

    const [add,setAdd]=useState([]);

    const valUpd=(e)=>{
        setdata(e.target.value)
    }

    const display=(e)=>{
         setAdd([...add,data])
    }

    return(
        <>
        <input type="text" onChange={valUpd}  name="data" ></input>
        <button onClick={display}>ADD</button>
        <ol>
            {
                add.map((val)=>{
                    return(
                        <li>{val}</li>
                    )
                })
            }
        </ol>
        </>
    )
}
export default Map3;