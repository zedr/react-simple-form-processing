import React, {useState} from "react";

const API_URL = "http://localhost:3000";

const TodoItem = (props) => {
  const [isOpen, setOpen] = useState(true);

  function handleSubmit(ev) {
    ev.preventDefault();
    const row = [new Date().toLocaleString(), ev.target.id, props.getSelectedDate()];
    new FormData(ev.target).forEach((value) => row.push(value));
    fetch(
      API_URL,
      {
        method: "POST",
        headers: {},
        body: JSON.stringify(row)
      }
    ).then((resp) => window.alert(`
  Sent: ${JSON.stringify(row)}
  Received: ${resp.status} ${resp.statusText}
  `));
  }

  return (
    <div>
      <label
        onClick={() => setOpen(!isOpen)}>{props.item.shopName}</label>
      <form className="form-example" id={props.item.shopName}
            onSubmit={handleSubmit}>
        <div className="form-example">
          <label htmlFor="name">Enter your first name: </label>
          <input type="text" name="fname" required/>
        </div>
        <div className="form-example">
          <label htmlFor="name">Enter your last name: </label>
          <input type="text" name="lname" required/>
        </div>
        <div className="form-example">
          <button type="submit" value="Submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const DatePickerWidget = (props) => {
  const [state, setState] = useState({'selectedDate': props.initialState.selectedDate});

  function handleChange(value) {
    props.initialState.selectedDate = value;
    setState({'selectedDate': value})
  }

  return (
    <div>
      <label htmlFor="start">Start date:</label>
      <input type="date" id="start" name="trip-start"
             value={state.selectedDate}
             onChange={(ev) => handleChange(ev.target.value)}
             min="2018-01-01" max="2018-12-31"/>
    </div>
  )
};

const TodoContainer = () => {
  const shops = [
    {shopName: "Shop1"},
    {shopName: "Shop2"}
  ];
  const containerState = {'selectedDate': '2018-07-07'};
  const getContainerStateDate = () => containerState.selectedDate;

  return (
    <React.Fragment>
      <DatePickerWidget initialState={containerState}/>
      <div>
        {shops.map((shop, index) => (
          <TodoItem key={index}
                    item={shop}
                    getSelectedDate={getContainerStateDate}/>
        ))}
      </div>
    </React.Fragment>
  )
};

export default TodoContainer;
