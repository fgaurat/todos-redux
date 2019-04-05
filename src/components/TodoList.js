import React from 'react';
import { TodoListItem } from './TodoListItem';


export class TodoList extends React.Component{

    componentDidMount(){
        this.props.loadTodos();
    }

    render(){
        return(
            <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>completed?</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {this.props.todos.map(todo => 
                <TodoListItem key={todo.id} todo={todo} handleDelete={this.props.handleDelete}/>
            )}
            </tbody>
            </table>
        );
    }

}