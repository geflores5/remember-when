import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setMemoryTextFilter, sortByAscending, sortByDescending, setStartDate, setEndDate } from '../../actions/memoryFilters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class MemoryListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null
    }
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <input
            type="text"
            placeholder="Search"
            value={this.props.memoryFilters.text}
            onChange={(e) => {
              this.props.dispatch(setMemoryTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="col s6">
          <DateRangePicker
                startDate={this.props.memoryFilters.startDate}
                startDateId="foo"
                endDate={this.props.memoryFilters.endDate}
                endDateId="bar"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
        </div>
      </div>
      
    );
  }
}

const matpStateToProps = (state) => {
  return {
    memoryFilters: state.memoryFilters
  }
};

export default connect(matpStateToProps)(MemoryListFilters);