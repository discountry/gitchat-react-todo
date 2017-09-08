import React from 'react';

const Todo = ({ content, onClick, completed }) => (
    <li style={{
        textDecoration:
            completed ?
            'line-through' :
            'none',
        color:
            completed ?
            '#d9d9d9' :
            '#4d4d4d'
        }
    }>
        <div className="view">
            <input onChange={onClick} className="toggle" type="checkbox" checked={completed ? 'checked' : ''} />
            <label href="/#">{content}</label>
        </div>
    </li> 
);

export default Todo;