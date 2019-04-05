import React from 'react';


export function TodoListItem({todo,handleDelete}){
    return(
        <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed?<span>&#x2713;</span>:<span>&#x2715;</span>}</td>
        <td>
            <button className="btn btn-danger" onClick={e => handleDelete(todo)}>Delete</button>
        </td>
    </tr>

    )    
}