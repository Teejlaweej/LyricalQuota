import React, { Component } from 'react';
import { connect } from 'react-redux';

//Lyric display only grabs the information text that needs to be displayed
//onto the screen. Track name, artist name, lyrics, and link


function randomLyric(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class LyricDisplay extends Component {

  displayInfo() {
    if (this.props.track.has_lyrics == 0){
      return null;
    }
    //returns the track name and artist if available
    return (
      <header>
        <h1 className="trackInfo"> {this.props.track.track_name} </h1>
        <h2 className="trackInfo"> {this.props.track.artist_name} </h2>
      </header>
    );
  }

  displayLyrics() {

  //check if the track grabbed has lyrics
  if (this.props.track.has_lyrics == 0){
    return (<h1 className="helpScreen"> - SONG NOT FOUND -  </h1>);
  }

    var lyrics = this.props.lyric.lyrics_body;
    lyrics = lyrics.split("\n");
    for (var i = 0; i < 3; i++){
      lyrics.pop();
    }
    console.log(lyrics);
    var line = randomLyric(lyrics.length - 1);

    //checks to make sure that the random line grabbed isn't an empty s_track_rating
    //if not then find a line where there are two lines
    while (lyrics[line] == "" || lyrics[line + 1] == ""){
        line += 1;
        if (line == lyrics.length - 1) {
          line = 0;
        }
    }

    //displays the lyrics and link to lyrics
    return (
      <section className="lyrics">
        <q>
          {lyrics[line]} <br />
          {lyrics[line + 1]}
        </q>
        <div className="link">
          <a href={this.props.track.track_share_url} target="_blank"> Full lyrics </a>
        </div>
      </section>
    );
  }

  constructor (props) {
    super(props);

    this.state = {parsedLyrics: []};
  }

  render() {
    if (!this.props.track || !this.props.lyric) {
      return (
        <h1 className="helpScreen"> SEARCH FOR AN ARTIST FOR A RANDOM QUOTE FROM THEIR SONGS </h1>
      )
    }

    return (
      <div>
          {this.displayInfo()}
          {this.displayLyrics()}
      </div>
    );
  }
}

/*
//used for single reducer
function mapStateToProps ({track, lyric}) {
  return { track, lyric };
}
*/

function mapStateToProps (state) {
  return {track: state.track, lyric: state.lyric};
}

export default connect (mapStateToProps)(LyricDisplay);
