import React, { useState } from 'react'
import './styles/TodoElement.scss';
import {RiDeleteBin7Fill, RiEdit2Fill, RiCheckFill} from 'react-icons/ri'


import { Todo } from '../model';

interface Props {
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const TodoElement = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<Boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id:number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    };
    
    return (
        <form 
            className="todo-element"
            onSubmit={(e) => handleEdit(e, todo.id)}
        >
            {
                edit ? (
                    <input 
                        value={editTodo} 
                        onChange={(e) => setEditTodo(e.target.value)}
                        className="todo-element__text"
                    />
                ) : todo.isDone ? (
                    <s className="todo-element__text">{todo.todo}</s>
                ) : (
                    <span className="todo-element__text">{todo.todo}</span>
                )
            }
            {

            }
            <div className="todo-element__icons">
                <span className="todo-element__icon" onClick={() => handleDone(todo.id)}><RiCheckFill/></span>
                <span className="todo-element__icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}><RiEdit2Fill /></span>
                <span className="todo-element__icon" onClick={() => handleDelete(todo.id)}><RiDeleteBin7Fill /></span>
            </div>
        </form>
    )
}

export default TodoElement
