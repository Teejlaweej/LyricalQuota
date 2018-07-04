import axios from 'axios';
import { getTrack } from './index';
import { trackName, trackArtist, hasLyrics } from '../reducers/reducer_track';

const API_KEY = "UyKmZXlvH6GyebaTk2afNM3sfGIQ1oGuFXrUXho75bNx1m0nC-qrVb-_1aTz62IZ";
const ROOT_URL = `http://api.genius.com/search?access_token=` + API_KEY + `&q=`;

export const FETCH_COVER = "FETCH_COVER";
export const FAILED_FETCH = "FAILED_FETCH";

export function fetchCover(artist) {
  //Handles empty searches
  if (!artist || hasLyrics == 0){
    console.log("null");
    return {type: FAILED_FETCH, payload: null};
  }

  var url = `${ROOT_URL}` + trackName + " " + trackArtist;
  var request = axios.get(url)
  .then((response) => {
    //handles long track names for more precise searchers (still makes mistakes)
    var name = trackName;
    name = name.split("-");
    name = name[0].split("(");

    //handles null response error
    if (response.data.response.hits.length == 0 || !response.data || hasLyrics == 0)
    {
      return null
    }
    //uses new trackName because it updates **NO CLUE WHY IT UPDATES IN .THEN**
    return axios.get(`${ROOT_URL}` + name[0] + " " + trackArtist)
  });

  //Used for non asynchronized calls
  return {
    type: FETCH_COVER,
    payload: request
  };

  }

  /*
  const request = getTrack(artist)
  .then((response) => {
    //hands long track names to search more precisely
    var trackName = response.track.track_name;
    trackName = trackName.split("-");
    trackName = trackName[0].split("(");

    return axios.get(`${ROOT_URL}` + trackName[0] + " " + response.track.artist_name);
  })
  .then((response) => {
    if (response.data.response.hits.length == 0 || !response.data)
    {
      return null
    }
    return response
  });

  if (!request){
    console.log("null");
    return {type: FAILED_FETCH, payload: request};
  }

  //Used for non asynchronized calls
  return {
    type: FETCH_COVER,
    payload: request
  };

}
*/
