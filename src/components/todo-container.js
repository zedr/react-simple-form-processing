import React from "react";

function TodoItem(props) {
  return (
    <li>
    <input type="checkbox" 
           checked={props.todo.ok}
           onChange={props.handleChangeProps}
      />{props.todo.title}
    </li>
  )
}

class TodoContainer extends React.Component {

  state = {
    items: [{id: 1, title: "hello", ok: true}, {id: 2, title: "moto", ok: false}]
  }

  handleChange() {
    console.log('Click');
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <TodoItem key={item.id} todo={item} handleChangeProps={this.handleChange} />
        ))}
      </ul>
    )
  }

}

export default TodoContainer;
