import React, { useState } from 'react';
import './App.scss';

import InputField from './components/InputField'

const App = () => {

  const [todo, setTodo] = useState<string>("")

  return (
    <div className="App">
      <span className="header">YOU HAVE SOME WORK BOY</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
