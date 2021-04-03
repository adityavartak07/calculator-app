import React, { Component } from 'react';
import './App.css';
import {Button} from 'reactstrap'


class App extends React.Component {
  constructor() {
    super()
    this.state={
      currentValue:''
    }
    this.handleClick=this.handleClick.bind(this)
    this.delete=this.delete.bind(this)
    this.evaluate=this.evaluate.bind(this)


  }
  handleClick(e){
    e.preventDefault()
    this.setState({
      
     currentValue:this.state.currentValue+e.target.value
    })
  }
  delete(e){
    e.preventDefault()
    this.setState({
      
     currentValue:''
    })
  }


  evaluate(){
    var x=eval(this.state.currentValue);
    this.setState({
      currentValue:x.toFixed(4)
    })
  }
  




  render() {
    return (
      <div className="App">
        
        <div id="numbers" className="col-md-12 ">
          <div className="display"  >
          {this.state.currentValue}
          </div>
          <div className="buttons">
          <div className="grid" >
          <Button value="1" onClick={this.handleClick}>1</Button>
          <Button value="2"  onClick={this.handleClick}>2</Button>
          <Button value="3"  onClick={this.handleClick}>3</Button>
          <Button id="operator" value="/"  onClick={this.handleClick}>/</Button>
          <Button onClick={this.delete} id="operator">AC</Button>

        </div>
        <div className="grid">
          <Button value="4"  onClick={this.handleClick}>4</Button>
          <Button value="5"  onClick={this.handleClick}>5</Button>
          <Button value="6"  onClick={this.handleClick}>6</Button>
          <Button id="operator" value="*"  onClick={this.handleClick}>*</Button>

        </div>
        <div className="grid">
          <Button value="7"  onClick={this.handleClick}>7</Button>
          <Button value="8"  onClick={this.handleClick}>8</Button>
          <Button value="9"  onClick={this.handleClick}>9</Button>
          <Button id="operator" value="+"  onClick={this.handleClick}>+</Button>

        </div>
        <div className="grid">
          <Button value="0"  onClick={this.handleClick}>0</Button>
          <Button value="."  onClick={this.handleClick}>.</Button>
          <Button value=".0"  onClick={this.handleClick}>.0</Button>
          <Button id="operator" value="-"  onClick={this.handleClick}>-</Button>
          
          <Button  id="operator" value="=" onClick={this.evaluate}>=</Button>

        </div>
        
          
          
          </div>
         





        </div>
        

      </div>
    );
  }
}

export default App;
