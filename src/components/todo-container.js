import React from "react";

const API_URL = "http://localhost:3000";

const TodoItem = (props) => {
  const state = {"isOpen": true};

  function toggleOpen() {
    state.isOpen = state.isOpen ? false : true;
    console.log(state.isOpen? "Opened" : "Closed");
  }

  function handleSubmit(ev) {
      ev.preventDefault();
      const row = [new Date().toLocaleString(), ev.target.id];
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
  return (
    <div>
      <label onClick={toggleOpen}>{props.item.shopName}</label>
      <form id={props.item.shopName} onSubmit={handleSubmit}>
        <label>First name:</label>
        <input type="text" id="fname" name="fname" />
        <label>Last name:</label>
        <input type="text" id="lname" name="lname" />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

const TodoContainer = () => {
  const state = {
    items: [
        {shopName: "Shop1"},
        {shopName: "Shop2"}
    ]
  }
  return (
    <div>
      {state.items.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  )
}

export default TodoContainer;
