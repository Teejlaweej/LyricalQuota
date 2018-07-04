import axios from 'axios';
import { trackID } from '../reducers/reducer_track';
import { getTrackList } from './index';
import { API_KEY } from './index';
import { ROOT_URL } from './index';

export const FETCH_LYRIC = "FETCH_LYRIC";
export const FAILED_FETCH = "FAILED_FETCH";

export function fetchLyric(artist) {

  if (!artist){
    console.log("in");
    return {type: FAILED_FETCH, payload: request};
  }

  const request = getTrackList(artist)
  .then((response) => {
      //uses the track id imported form reducer_track
      if (!trackID){
        console.log("in1");
        return null;
      }
      return axios.get(`${ROOT_URL}track.lyrics.get?&track_id=`
       + trackID + "&"+ API_KEY)
  });
  //Used for non asynchronized calls
  return {
    type: FETCH_LYRIC,
    payload: request
  };

}
