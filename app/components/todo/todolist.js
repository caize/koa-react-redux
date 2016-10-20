import React, { Component, PropTypes } from 'react';
import Todo from './todo';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
            <Todo
              {...todo}
              onTodoClick={() => this.props.onTodoClick(index)}
              key={index}
            />
          )
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
