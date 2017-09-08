import React from 'react';
import AddTodo from '../Containers/AddTodo';
import VisibleTodoList from '../Containers/VisibleTodoList';
import Footer from './Footer';

import 'todomvc-app-css/index.css';

const TodoApp = () => (
    <section className="todoapp">
        <AddTodo/>
        <VisibleTodoList />
        <Footer/>
    </section>
);

export default TodoApp;