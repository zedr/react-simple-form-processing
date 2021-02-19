import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>Hi!</li>
    )
  }
}

class TodoContainer extends React.Component {

  render() {
    return (
      <ul>
        <TodoItem />
      </ul>
    )
  }

}

export default TodoContainer;
