import React, { Component } from "react";
import DatePicker from "react-date-picker";
import "./datepick.css";

class DatePickerr extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="myDate">
        <DatePicker onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default DatePickerr;
