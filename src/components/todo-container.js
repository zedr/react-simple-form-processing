import React, {useState} from "react";

const TodoItem = (props) => {
  return (
    <div>
      <p>Date: {props.data.date}</p>
      <p>Text: {props.data.text}</p>
    </div>
  )
}

const DatePickerWidget = (props) => {
  const [state, setState] = useState({date: "2021-03-01"})

  function handleChange(ev) {
    const selectedDate = ev.target.value;
    setState({date: selectedDate});
    props.callback(selectedDate);
  }

  return (
    <div>
      <label htmlFor="start">Start date:</label>
      <input type="date" id="start" name="trip-start"
             value={state.date}
             onChange={handleChange}
             min="2021-01-01" max="2022-01-01"/>
    </div>
  )
};

const TodoContainer = () => {
  const data = [
    {date: "2021-03-26", text: "Sami"},
    {date: "2021-03-25", text: "Lili"},
    {date: "2021-03-24", text: "Sami"},
    {date: "2021-03-24", text: "Lili"},
    {date: "2021-03-23", text: "Sami"},
    {date: "2021-03-23", text: "Lili"},
    {date: "2021-03-22", text: "Sami"},
    {date: "2021-03-21", text: "Lili"},
  ];
  const [state, setState] = useState(data);

  function listUpdater(selectedDate) {
    console.log(`Filtering for: ${selectedDate}`);
    setState(data.filter((item) => item.date === selectedDate));
  }

  return (
    <React.Fragment>
      <DatePickerWidget callback={listUpdater}/>
      <div>
        {state.map((date, index) => (
          <TodoItem key={index} data={date} />
        ))}
      </div>
    </React.Fragment>
  )
};

export default TodoContainer;
