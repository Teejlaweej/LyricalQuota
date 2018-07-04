import { FETCH_TRACK } from '../actions/index';

export var trackID;
export var trackArtist;
export var trackName;

export default function (state = null, action) {
  switch (action.type) {
  case FETCH_TRACK:
    //with the found track list, export the track id to identify the chose track
    trackID = action.payload.track.track_id;
    return action.payload.track;
    //.payload.data.message.body.track_list[0].track;
    //return [action.payload.data, ...state];
  }
  return state;
}
