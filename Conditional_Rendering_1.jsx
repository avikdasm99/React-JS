import React from "react";
class Conditional_Rendering_1 extends React.Component{
    state={
        username:''
    }
    myChange=(e)=>{
        this.setState({username:e.target.value})
    }
    render(){
        let massage='';
        if(this.state.username){
            massage=<h1>Hellow Welcome , {this.state.username}</h1>
        }
        else{
            massage='';
        }
        return(
            <>
            {massage}
            <input type="text" onChange={this.myChange} placeholder="Enter your name"></input>
            </>
        )
    }
}
export default Conditional_Rendering_1