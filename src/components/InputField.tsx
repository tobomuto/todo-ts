import React from 'react';

import './styles/InputField.scss';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent)=>void
}
const InputFields = ({ todo, setTodo, handleAdd }:Props) => {

    return (
        <form className="input-field" onSubmit={handleAdd}>
            <input 
                className="input-field__input" 
                type="text" 
                placeholder="add a new task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input-field__submit" type="submit">+</button>
        </form>
    )
}

export default InputFields;
