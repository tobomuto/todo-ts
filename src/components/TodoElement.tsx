import React from 'react'
import './styles/TodoElement.scss';
import {RiDeleteBin7Fill, RiEdit2Fill, RiCheckFill} from 'react-icons/ri'


import { Todo } from '../model';

interface Props {
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoElement = ({todo, todos, setTodos}: Props) => {
    return (
        <form className="todo-element">
            <span className="todo-element__text">{todo.todo}</span>
            <div className="todo-element__icons">
                <span className="todo-element__icon"><RiCheckFill/></span>
                <span className="todo-element__icon"><RiEdit2Fill /></span>
                <span className="todo-element__icon"><RiDeleteBin7Fill /></span>
            </div>
        </form>
    )
}

export default TodoElement
