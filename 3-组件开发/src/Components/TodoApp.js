import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import todos from '../store.js';

const TodoApp = () => (
    <div>
        <AddTodo/>
        <TodoList todos={todos}/>
        <Footer/>
    </div>
);

export default TodoApp;