import axios from 'axios';
import { getTrack } from './index';
//import { trackArtist, trackName } from '../reducers/reducer_track';

const API_KEY = "UyKmZXlvH6GyebaTk2afNM3sfGIQ1oGuFXrUXho75bNx1m0nC-qrVb-_1aTz62IZ";
const ROOT_URL = `http://api.genius.com/search?access_token=` + API_KEY + `&q=`;

export const FETCH_COVER = "FETCH_COVER";
export const FAILED_FETCH = "FAILED_FETCH";

export function fetchCover(artist) {
  //WAS USED BECAUSE IMPORTING FROM REDUCER_TRACK
  /*
  if (!trackName || !trackArtist){
    console.log("returning");
    return {
      type: 'FAILED_FETCH',
      payload: null
    }
  }
  */

  //var url = `${ROOT_URL}` + trackName + trackArtist;
  //var request = axios.get(url);
  const request = getTrack(artist)
  .then((response) => {
    var trackName = response.track.track_name;
    trackName = trackName.split(" ", 3);
    //console.log("split", trackName);
    trackName = trackName.join(" ");
    //console.log(trackName);
    return axios.get(`${ROOT_URL}` + trackName + response.track.artist_name);
  })
  .then((response) => {
    if (response.data.response.hits.length == 0)
    {
      return null;
    }
    console.log("response", response);
    return response;
  });

  if (!request)
  {
    return {type: FAILED_FETCH, payload: request};
  }

  //Used for non asynchronized calls
  return {
    type: FETCH_COVER,
    payload: request
  };

}
