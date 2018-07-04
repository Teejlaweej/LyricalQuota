import { FETCH_TRACK } from '../actions/index';

export var trackID;
export var trackName;
export var trackArtist;
export var hasLyrics;

export default function (state = null, action) {
  switch (action.type) {
  case FETCH_TRACK:
    //with the found track list, export the track id to identify the chose track
    trackID = action.payload.track.track_id;
    trackName = action.payload.track.track_name;
    trackArtist = action.payload.track.artist_name;
    hasLyrics = action.payload.track.has_lyrics;
    return action.payload.track;
    //.payload.data.message.body.track_list[0].track;
    //return [action.payload.data, ...state];
  }
  return state;
}
