import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrack } from '../actions/index';
import { fetchLyric } from '../actions/lyric_action';
import {Glyphicon} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props){
    super(props);

    //initialize the search term
    this.state = { term: '' };

    //allows the functions to use "this"
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // changes the state of the app, making the term equal to the value
  onInputChange (event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  //when enter or search is pressed, peform the actions.
  onFormSubmit(event) {
    //doesn't rerender every time somethings typed
    event.preventDefault();

    //fetch song data, imported actions
    this.props.fetchTrack(this.state.term);
    this.props.fetchLyric(this.state.term);
    //reset state
    this.setState({term: ''})
  }

  render() {
    return (
      //form has enter and buttons
      <div className="searchBar">
      <form onSubmit={this.onFormSubmit} className="input-group">
        <div className="input-group">
          <input
            placeholder="Search an artist"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </div>
      </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrack, fetchLyric }, dispatch)
}

export default connect (null, mapDispatchToProps)(SearchBar);
