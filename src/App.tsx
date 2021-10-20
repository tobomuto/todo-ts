import React, { useState } from 'react';
import './App.scss';

import InputFields from './components/InputFields'

const App = () => {

  const [todo, setTodo] = useState<string>("")

  return (
    <div className="App">
      <span className="header">YOU HAVE SOME WORK BOY</span>
      <InputFields todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
