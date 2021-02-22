import React, {useState, useContext} from 'react'
import { ThemeContext } from './App'
function CounterHooks({intCount}) {
  const [count, setState] = useState(intCount)
  const style = useContext(ThemeContext)
  return(
    <div>
    <button style={style} onClick={()=> setState(count-1)}>-</button>
    <span>{count}</span>
    <button style={style} onClick={_=> setState(count+1)}>+</button>
  </div>
  )
}

export default CounterHooks
