import { useEffect, useState } from "react";
import axios from 'axios';

export default function Table(){
    const[info,setinfo]=useState([])
    useEffect(()=>{
        setTimeout(()=>{
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(
                (res)=>{
                    setinfo(res.data)
                }
            )
            .catch(
                (err)=>{console.log(err)}
            )
        },5000)
    },[])
    return(
        <>
        <h1>Wait For 5 seconds</h1>
        <table cellPadding={10} cellSpacing={10} border={10}>
            <thead bgColor={'orange'}>
                <tr>
                    <td>Id</td>
                    <td>AlbumId</td>
                    <td>Title</td>
                    <td>URL</td>
                    <td>ThumbnailUrl</td>
                </tr>
            </thead>
            <tbody>
                {
                    info.slice(0,100).map((val)=>{
                        return(
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.albumId}</td>
                                <td>{val.title}</td>
                                <td>{val.url}</td>
                                <td>{val.thumbnailUrl}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        </>
    )
}