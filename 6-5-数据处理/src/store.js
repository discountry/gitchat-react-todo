import { todos } from './reducer';
import { createStore } from 'redux';

const defaultTodos = [
    { 
        id: 1,
        content: "学习 React"
    },
    { 
        id: 2,
        content: "学习 Redux"
    },
    { 
        id: 3,
        content: "学习 react-router"
    },
];

const store = createStore(todos, defaultTodos);

export default store;

