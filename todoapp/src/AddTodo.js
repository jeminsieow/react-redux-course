import React, {Component} from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      content: this.state.content
    };
    this.props.addTodo(todo);
    e.target.reset();
    // this.setState({
    //   content: ''
    // })
  };

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit } >
          <label>Add new todo:</label>
          {/*<input type="text" onChange={ this.handleChange } value={this.state.content}/>*/}
          <input type="text" onChange={ this.handleChange }/>
        </form>
      </div>
    )
  }
}

export default AddTodo;