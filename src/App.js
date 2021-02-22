import './App.css';
import React, { useState } from 'react'

import Counter from './Counter';
import CounterHooks from './CounterHooks';
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("purple")
  return (
    <div className="App">
      <ThemeContext.Provider value={{backgroundColor: theme}}>
        <Counter initialCount={1}/>
        <CounterHooks intCount={3}/>
        <button onClick={()=> setTheme(preTheme => {
          return preTheme === 'red' ? 'blue' : 'red';
        })}>Toggle button</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
