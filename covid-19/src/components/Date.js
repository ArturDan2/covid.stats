import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';



export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
    this.props.setDay(day);
  }

  render() {
    Date.prototype.decreaseDays = function(days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() - days);
      return date;
  }

    return (
      <div>
        <DayPickerInput placeholder="YYYY-MM-DD" onDayChange={this.handleDayChange} />
      </div>
    )
  }
}

