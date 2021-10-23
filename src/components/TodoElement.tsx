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
    const handleDone = (id:number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <form className="todo-element">
            {
                todo.isDone ? (
                    <s className="todo-element__text">{todo.todo}</s>
                ) : (
                    <span className="todo-element__text">{todo.todo}</span>
                )
            }
            <div className="todo-element__icons">
                <span className="todo-element__icon" onClick={() => handleDone(todo.id)}><RiCheckFill/></span>
                <span className="todo-element__icon"><RiEdit2Fill /></span>
                <span className="todo-element__icon" onClick={() => handleDelete(todo.id)}><RiDeleteBin7Fill /></span>
            </div>
        </form>
    )
}

export default TodoElement
