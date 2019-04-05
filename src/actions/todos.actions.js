import { URL_TODOS } from '../const';

export function getAlltodos(){
    return async (dispatch) =>{
      const response = await fetch(URL_TODOS);
      const todos = await response.json();
      const action = {
        type:'LOAD_TODOS',
        todos
      }
      dispatch(action);
    }
  }
  
export function deleteTodo(todo){
    return async (dispatch) =>{
        const url_delete = `${URL_TODOS}${todo.id}`;
        await fetch(url_delete,{method:'DELETE'});
        dispatch(getAlltodos())
    }
}
