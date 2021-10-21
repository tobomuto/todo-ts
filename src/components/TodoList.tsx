import React from 'react'
import './styles/TodoList.scss';

import TodoElement from './TodoElement';

import { Todo } from '../model';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoElement 
                    key={todo.id} 
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoList
