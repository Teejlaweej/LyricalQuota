import axios from 'axios';
import { selectTrack } from './index';

const API_KEY = 'apikey=a2560a1e8bb98049e2506a3aa30edaf0';
const ROOT_URL = 'http://api.musixmatch.com/ws/1.1/';

export const FETCH_LYRIC = "FETCH_LYRIC";

export function fetchLyric(artist) {
  var url = `${ROOT_URL}artist.search&q_artist=${artist}&page_size=20&` + API_KEY;
  const request = axios.get(url)
  .then((response) => {
      return axios.get(`${ROOT_URL}track.search&page_size=100&f_artist_id=
        ${response.data.message.body.artist_list[0].artist.artist_id}` +
        '&s_track_rating=desc&' + API_KEY)
  })
  .then((response) => {
      return axios.get(`${ROOT_URL}track.lyrics.get?&track_id=
        ${response.data.message.body.track_list[selectTrack].track.track_id}&`+ API_KEY)
  });

  //Used for non asynchronized calls
  return {
    type: FETCH_LYRIC,
    payload: request
  };

}
