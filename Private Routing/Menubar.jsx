import { Link } from "react-router-dom";

export default function Menubar(){
    return(
        <>
        <nav>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/dashboard'>Dashboard</Link>
            <br></br>
            <Link to='/product'>Product</Link>
        </nav>
        
        </>
    )
}