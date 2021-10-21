import React from 'react'
import './styles/TodoElement.scss';

import { Todo } from '../model';

interface Props {
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoElement = ({todo, todos, setTodos}: Props) => {
    return (
        <form className="todo-element">
            
        </form>
    )
}

export default TodoElement
