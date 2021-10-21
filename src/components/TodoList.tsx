import React from 'react'

import './styles/TodoList.scss';

import { Todo } from '../model';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <li>{todo.todo}</li>
            ))}
        </div>
    )
}

export default TodoList
