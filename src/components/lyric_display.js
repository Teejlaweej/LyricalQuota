import React, { Component } from 'react';
import { connect } from 'react-redux';

//Lyric display only grabs the information text that needs to be displayed
//onto the screen. Track name, artist name, lyrics, and link

function randomLyric(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var displayed = false;

class LyricDisplay extends Component {


  constructor (props) {
    super(props);
    
  }

  displayInfo() {
    if (this.props.track.has_lyrics == 0){
      return null;
    }

    //handles long track name, displays the main focus
    var trackName = this.props.track.track_name;
    trackName = trackName.split("-");
    trackName = trackName[0].split("(");
    this.props.track.track_name = trackName[0];

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
    return (<h1 className="helpScreen"> - NO LYRICS FOUND RE-SEARCH -  </h1>);
  }

    var lyrics = this.props.lyric.lyrics_body;
    lyrics = lyrics.split("\n");
    for (var i = 0; i < 3; i++){
      lyrics.pop();
    }
    //console.log(lyrics);
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
        <div className="copyright">
          Lyrics powered by www.musixmatch.com | Images powered by genius.com
        </div>
      </section>
    );
  }

  render() {
    if (!this.props.track || !this.props.lyric) {
      return (
        <h1 className="helpScreen"> SEARCH AN ARTIST FOR A QUOTE FROM THEIR SONGS </h1>
      )
    }

    displayed = true;

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
