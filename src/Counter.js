import React, { Component } from 'react'
import { ThemeContext } from './App'
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.initialCount}
  }
  render() {
    return(
      <ThemeContext>
        {style => (
             <div>
             <button style={style}onClick={_=> this.onChange(-1)}>-</button>
             <span>{this.state.count}</span>
             <button style={style}onClick={_=> this.onChange(1)}>+</button>
           </div>
        )}
      </ThemeContext>
    )
  }
  onChange(amount) {
    this.setState(oldState => {
      return {count: oldState.count + amount}
    })
  }
}
export default Counter