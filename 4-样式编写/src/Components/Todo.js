import React from 'react';

const Todo = ({ content }) => (
    <li>
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label href="/#">{content}</label>
        </div>
    </li> 
);

export default Todo;