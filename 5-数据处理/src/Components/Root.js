import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import store from '../store';

const Root = () => {
    return (
       <Provider store={store}>
           <TodoApp />
        </Provider>
    );
};

export default Root;