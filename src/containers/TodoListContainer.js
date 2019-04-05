import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { getAlltodos, deleteTodo } from '../actions/todos.actions';


const mapStateToProps = state => {
    console.log(state)
  
  return ({
    todos: state.theTodos.todos
})}

const mapDispatchToProps = dispatch => ({
  loadTodos: _ => dispatch(getAlltodos()),
  handleDelete: todo => dispatch(deleteTodo(todo))
})

export default connect(
    mapStateToProps,mapDispatchToProps
  )(TodoList)