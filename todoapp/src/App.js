import React, {Component} from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'learn react'},
      {id: 2, content: 'work on CSC project'}
    ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos})
  };

  render() {
    return (
      <div className="todo-app container">
        <h2 className="center">To do list</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
