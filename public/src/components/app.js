import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LyricDisplay from '../components/lyric_display';
import * as firebase from 'firebase';

export default class App extends Component {
  render() {
    return (
      <div>
        <LyricDisplay />
        <SearchBar />
      </div>
    );
  }
}
