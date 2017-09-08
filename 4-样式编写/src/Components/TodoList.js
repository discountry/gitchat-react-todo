import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {todos.map((todo) => (
            <Todo key={todo.id} content={todo.content} />
        ))}
    </ul>
);

export default TodoList;