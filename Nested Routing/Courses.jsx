import { Link, Outlet } from "react-router-dom";

export default function Courses(){
    return(
        <>
        <h1>You are in course component</h1>
        <div>
            <Link to='/courses/search'>Search</Link>
            <br></br>
            <Link to='/courses/list'>List</Link>
            <br></br>
        </div>
        <h3>Hellow this is child content</h3>
        <br></br>
        
        <div style={{border:'2px solid green',width:'50%'}}></div>
        <h3>Child content will Load</h3>
        <Outlet/>
        </>
    )
}