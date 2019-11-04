import React, { Component } from "react";
import moment from "moment";
import TimePicker from "../TimePicker";
import "./timepickerform.css";

class TimeSelectForm extends Component {
  state = {
    value: moment()
  };

  handleChange = value => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    alert(moment(this.state.value).format("hh:mm a"));
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <TimePicker value={this.state.value} onChange={this.handleChange} />
    </form>
  );
}

export default TimeSelectForm;
