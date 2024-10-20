import React from "react";

class First extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'mohamed',
      age:19
    }
  }
  render(){
    return(
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
      </>
    )
  }
}
export default First;