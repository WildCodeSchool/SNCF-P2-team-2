import React from "react";
import DatePicker from "react-date-picker";
import "./datepick.css";

const DatePickerr = props => {
  const onChange = date =>
    props.setGlobalState({
      ...props.globalState,
      date: date
    });
  console.log(props);
  return (
    <div className="myDate">
      <DatePicker onChange={onChange} value={props.globalState.date} />
    </div>
  );
};

export default DatePickerr;
