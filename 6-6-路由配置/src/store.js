import { todos } from './reducer';
import { createStore } from 'redux';

const defaultTodos = [
    { 
        id: 1,
        content: "学习 React",
        completed: false
    },
    { 
        id: 2,
        content: "学习 Redux",
        completed: false
    },
    { 
        id: 3,
        content: "学习 react-router",
        completed: false
    },
];

const store = createStore(todos, defaultTodos);

export default store;

