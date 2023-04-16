import React from "react";
class Validation1 extends React.Component{
    state={
        name:'',
        age:null,
        errmsg:''
    }
    mychange=(e)=>{
        let n=e.target.name;
        let v=e.target.value;
        let err='';
        this.setState({[n]:[v]});
        if(n=='name'){
            if(v.length<6){
                err=<b>Length of the name is minium 6</b>
            }
        }
        if(n=='age'){
            if(v<20 || v>30){
                err=<b>Age must be in between 20 to 30</b>
            }
        }
        this.setState({errmsg:err});
    }
    render(){
        return(
            <>
            <input type="text" onChange={this.mychange} name="name" placeholder="Enter Your Name"></input>
            <input type="number" onChange={this.mychange} name="age" placeholder="Enter Your Name"></input>
            <h1 style={{color:'red'}}>{this.state.errmsg}</h1>
            </>
        )
    }
}
export default Validation1