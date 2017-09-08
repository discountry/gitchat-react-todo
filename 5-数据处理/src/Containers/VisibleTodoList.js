import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import { toggleTodo } from '../action';

const mapStateToProps = (state, ownProps) => ({
    todos: state
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;