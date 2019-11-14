import React from "react";
import TimePicker from "../TimePicker/TimeStyle";
import "./timepickerform.css";

const TimeSelectForm = props => {
  const handleChange = value => {
    props.setGlobalState({ ...props.globalState, time: value });
  };

  return (
    <div>
      <TimePicker value={props.globalState.time} onChange={handleChange} />
    </div>
  );
};

export default TimeSelectForm;
