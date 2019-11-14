import React, { Component } from "react";
import moment from "moment";
import TimePicker from "../TimePicker/TimeStyle";
import "./timepickerform.css";

class TimeSelectForm extends Component {
  state = {
    value: moment()
  };

  handleChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render = () => {
    return (
      <form>
        <TimePicker value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  };
}

export default TimeSelectForm;
