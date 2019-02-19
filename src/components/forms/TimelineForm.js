import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TimelineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.timeline ? props.timeline.title : '',
      description: props.timeline ? props.timeline.description : '',
      userID: props.timeline ? props.timeline.userID : this.props.auth.uid
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description,
      userID: this.state.userID
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/sign_in' />

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            type="text"
            placeholder="Title"
            onChange={this.onTitleChange}
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <button>Save Timeline</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(TimelineForm);