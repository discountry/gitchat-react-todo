import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import todos from '../store.js';

import 'todomvc-app-css/index.css';

const TodoApp = () => (
    <section className="todoapp">
        <AddTodo/>
        <TodoList todos={todos}/>
        <Footer/>
    </section>
);

export default TodoApp;