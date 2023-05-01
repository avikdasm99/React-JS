import { useState } from "react";

const P2=(props)=>{
    return(
        <>
        <h1>My name is {props.n}</h1>
        <h2>I live in  {props.l}</h2>
        <h3>My father name is  {props.f}</h3>
        <h3>My Mother name is  {props.m}</h3>
        </>
    )
}

const Props2=()=>{
    const[data,setData]=useState(
        {
            name:'',
            location:'',
            father:'',
            mother:'',
        }
    )
    const  valUpd=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    return(
        <>
        <div style={{display:"flex" , justifyContent:'center'}}>
        <table bgcolor="orange" cellSpacing={'10px'} cellPadding={'3px'} border={'3px'}>
            <th bgcolor="white" colSpan={2}>Information</th>
            <tr>Name
                <td><input type="text" name="name" onChange={valUpd}/></td> 
            </tr>
            <tr>Location
                <td><input type="text" name="location" onChange={valUpd}/></td>   
            </tr>
            <tr>Father
                <td><input type="text" name="father" onChange={valUpd}/></td>
            </tr>
            <tr>Mother
                <td><input type="text" name="mother" onChange={valUpd}/></td>
            </tr>
            <tr>
                {
                    <P2 n={data.name}  l={data.location} f={data.father} m={data.mother}/>
                }
            </tr>
           
        </table>
        </div>
        
        
        </>
    )
}

export default Props2;