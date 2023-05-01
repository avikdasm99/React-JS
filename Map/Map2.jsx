import React from "react";

const love=['react','java','python','mysql','html','css'];

function Map2(){
    return(
        <>
        <h1>
        <ol>
            {
                love.map((val)=>{
                    return(
                        <li >{val}</li>
                    )
                })
            }
        </ol>
        </h1>
        </>
    )
}
export default Map2;