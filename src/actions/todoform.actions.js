import { URL_TODOS } from '../const';
import { getAlltodos } from './todos.actions';


export const saveTodo=(e)=>{
    e.preventDefault();
    return async (dispatch) =>{
        const todo = {
            completed:e.target.completed.checked,
            title:e.target.title.value
        };
        const conf = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(todo)
          }
          await fetch(URL_TODOS,conf);
          dispatch(getAlltodos())        
    }
  }
