import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = { count: 0 };
    }
    increaseNumber = () =>{
        this.setState( {count: this.state.count + 1});
        this.props.onCounterValueChange(1);
    };

    decreaseNumber = () =>{
        this.setState( {count: this.state.count - 1});
        this.props.onCounterValueChange(-1);
    };

    render() {
        let { count } = this.state
        return (
                <div>
                  <button onClick={()=>{ this.increaseNumber() }}> + </button>
                    { count }
                  <button onClick={()=>{ this.decreaseNumber() }}> - </button>
                </div>
        );
      }
}
