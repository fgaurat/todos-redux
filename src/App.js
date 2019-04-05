import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <TodoListContainer/>
        </div>
        <div className="col-md-4">
          <TodoFormContainer/>
        </div>

      </div>
    </div>
    );
  }
}

export default App;
