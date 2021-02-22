import React from "react";

const API_URL = "http://localhost:3000";

class TodoItem extends React.Component {

    handleSubmit(ev) {
        ev.preventDefault();
        const row = [ev.target.id];
        new FormData(ev.target).forEach((value) => row.push(value));
        console.log(JSON.stringify(row));
        fetch(
            API_URL,
            {
                method: "POST",
                headers: {},
                body: JSON.stringify(row)
            }
        ).then((resp) => console.log(resp));
    }

    render() {
      const item = this.props.item;
      return (
        <div>
          <label>{item.shopName}</label>
          <form id={item.shopName} onSubmit={this.handleSubmit}>
            <label>First name:</label>
            <input type="text" id="fname" name="fname" />
            <label>Last name:</label>
            <input type="text" id="lname" name="lname" />
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
      )
    }
}

class TodoContainer extends React.Component {

  state = {
    items: [
        {shopName: "Shop1"},
        {shopName: "Shop2"}
    ]
  }

  render() {
    return (
      <div>
        {this.state.items.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </div>
    )
  }

}

export default TodoContainer;
