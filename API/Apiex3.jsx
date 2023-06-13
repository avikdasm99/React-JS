import axios from "axios";
import { useEffect, useState } from "react";

export default function Apiex3(){
    const[info,setInfo]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(
            (res)=>{
                console.log(res.data.products)
                setInfo(res.data.products)
            }
        )
        .catch(
            (err)=>console.log(err)
        )
    })
    return(
        <>
        <table cellPadding={10} cellSpacing={10} border={10} >
            <thead bgColor={'yellow'}>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>discountPercentage</td>
                    <td>rating</td>
                    <td>Stock</td>
                    <td>Brand</td>
                    <td>Catagory</td>
                    <td>Thumbnail</td>
                    <td>Image</td>    
                </tr>
            </thead>
            <tbody>
                {
                    info.map((val)=>{
                        return(
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.description}</td>
                                <td>{val.price}</td>
                                <td>{val.discountPercentage}</td>
                                <td>{val.rating}</td>
                                <td>{val.stock}</td>
                                <td>{val.brand}</td>
                                <td>{val.category}</td>
                                <td><img src={val.thumbnail} width={100}></img></td>
                                <td>
                                    {
                                    val.images.map((v)=>{
                                        return(
                                            <img src={v} width={100}></img>
                                        )
                                    })
                                    }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
        
    )
}