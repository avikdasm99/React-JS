import { useState } from "react";


//massage component
const Massage=(props)=>{
    if(props.val){
        return(<h1>WelCome  Back</h1>)
    }
    else{
        return(<h1>Please logIn First</h1>)
    }
}


// logIn compnnent
const LogIn=(props)=>{
    return(
        <button onClick={props.info}>Login</button>
    )
}


//logOut  componets
const Logout=(props)=>{
      return(
        <button onClick={props.clickout}>LogOut</button>
      )
}


const Props3=()=>{
    const [log,setlog]=useState(false);

    const handleLogin=()=>{
        setlog(true);
    }
    const handleLogOut=()=>{
        setlog(false);
    }
    return(
        <>
        <Massage val={log}/> 
        {
           (log)?
           (<Logout clickout={handleLogOut}/>):(<LogIn info={handleLogin}/>)
        }
        </>
    )
}
export default Props3;