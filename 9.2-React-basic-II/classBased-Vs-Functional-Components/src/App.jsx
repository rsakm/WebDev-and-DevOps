import React ,{ Component } from 'react'

import './App.css'

function App() {
  

  return (
    <>
      <div>
        <ClassCounter/>
       </div>
    </>
  )
}

class ClassCounter extends Component{
  state = {count:0};

  increment = ()=>{
    this.setState({count:this.state.count + 1});
  };

  render(){
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment} >Increase Count</button>
      </div>
    );

  }

}

export default App
