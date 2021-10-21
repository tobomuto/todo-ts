import React, { useState } from 'react';
import './App.scss';

import InputField from './components/InputField'
import { Todo } from './model';

const App = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false
        }
      ])
      setTodo("")
    }
  };

  return (
    <div className="App">
      <span className="header">YOU HAVE SOME WORK BOY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
