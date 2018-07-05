import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LyricDisplay from '../components/lyric_display';
import CoverDisplay from '../components/cover_display';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <LyricDisplay />
        <SearchBar />
        <CoverDisplay />

      </div>
    );
  }
}
