import { connect } from 'react-redux';
import { TodoForm } from '../components/TodoForm';
import { saveTodo } from '../actions/todoform.actions';


const mapStateToProps = state => {  return ({
    values:state.theForm,    
})}

const mapDispatchToProps = dispatch => ({
    handleChange: event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        return dispatch({type:'UPDATE_FORM',form_values:{[name]:value}})
    },    
    handleSubmit: e => dispatch(saveTodo(e)),
})

export default connect(
    mapStateToProps,mapDispatchToProps
  )(TodoForm)