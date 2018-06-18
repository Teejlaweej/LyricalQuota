import React, { Component } from 'react';
import { connect } from 'react-redux';


class LyricDisplay extends Component {

  //THESE RENDER FUNCTIONS ARE MORE FOR MAKING A LIST BY USING MAP FUNCTION
  /*
  renderArtist(artistData) {
    return <p key={artistData.artist_id}> {artistData.artist_name} </p>
  }

  renderFullLyrics(artistData) {
    return <a href={artistData.artist_share_url} target="_blank"> Full lyrics </a>
  }
  */

  render() {
    if (!this.props.track || !this.props.lyric) {
      return null
    }

    console.log("trackprop", this.props.track);

    return (
      <div>
        <header>
          <h1> {this.props.track.track_name} </h1>
          <h2> {this.props.track.artist_name} </h2>
        </header>
        <article>
          <q> {this.props.lyric.lyrics_body} </q>
          <a href={this.props.track.track_share_url} target="_blank"> Full lyrics </a>
        </article>
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
