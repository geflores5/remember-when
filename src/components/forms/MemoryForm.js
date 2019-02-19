import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { storage } from '../../config/configureFirebase';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

class MemoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: props.memory ? props.memory.userID : this.props.auth.uid,
      timelineID: props.memory ? props.memory.timelineID : props.timelineID,
      title: props.memory ? props.memory.title : '',
      date: props.memory ? moment(props.memory.date) : moment(),
      location: props.memory ? props.memory.location : '',
      description: props.memory ? props.memory.description : '',
      media: props.memory ? props.memory.media : [],
      imageUrl: props.memory ? props.memory.imageUrl : '',
      progress: 0
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }
  handleDatePicked = (date) => {
    this.setState({ date });
  };
  onLocationChange = (e) => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onMediaChange = (e) => {
    const media = e.target.files[0];
    this.setState(() => ({ media }));

    const uploadTask = storage.ref(`images/${media.name}`).put(media);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState(() => ({ progress }));
      },
      (error) => {
        console.log(error)
      },
      () => {
        storage.ref('images').child(media.name).getDownloadURL().then(url => {
          console.log(url);
          const imageUrl = url;
          this.setState(() => ({ imageUrl }));
        })
      }
    );
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      userID: this.state.userID,
      timelineID: this.state.timelineID,
      title: this.state.title,
      date: this.state.date.valueOf(),
      location: this.state.location,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
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
          <DatePicker
            selected={this.state.date}
            placeholderText="Click to select a date"
            onChange={this.handleDatePicked}
            showTimeSelect
            timeIntervals={1}
            dateFormat="MMMM DD, YYYY h:mm AA"
            timeCaption="Time"
          />
          <input
            type="text"
            placeholder="Location"
            onChange={this.onLocationChange}
            value={this.state.location}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <input
            type="file"
            accept="image/*"
            onChange={this.onMediaChange}
          />
          <button>Save Memory</button>
        </form>
        <progress value={this.state.progress} max="100"/>
        <img src={this.state.imageUrl || 'http://via.placeholder.com/400x300'} height="300" width="400"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(MemoryForm);