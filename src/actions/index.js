import axios from 'axios';



/*const TOKEN = dajq9AwtWy_vuffymXP2VL7FhNIoMtfol7WqraNHIBNSGXo36kGmHNhtS7Hq7QCl*/

export const FETCH_TRACK = 'FETCH_TRACK';
//export const FETCH_LYRIC = 'FETCH_LYRIC';


function randomTrack(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//export this function as a helper function for searching the artists tracks
export function getTrackList(artist) {

  var url = `${ROOT_URL}artist.search&q_artist=${artist}&page_size=20&` + API_KEY;
  var request = axios.get(url)
  .then((response) => {
      return axios.get(`${ROOT_URL}track.search&page_size=100&f_artist_id=
        ${response.data.message.body.artist_list[0].artist.artist_id}` +
        '&s_track_rating=desc&' + API_KEY)
  });

  return request;
}

//grabs one random track from the artists tracks list
export function getTrack(artist) {
  const request = getTrackList(artist)
  .then((response) => {
    //chooses a random track based on how many songs the artist has
    var selectTrack = randomTrack(response.data.message.body.track_list.length - 1)

    //checks if the song  has lyrics
    if (response.data.message.body
      .track_list[selectTrack]
      .track.has_lyrics == 0){
      selectTrack += 1;
    }
    return response.data.message.body.track_list[selectTrack]
  });
  return request;
}

export function fetchTrack(artist) {
  const request = getTrack(artist);
  //Used for non asynchronized calls
  return {
    type: FETCH_TRACK,
    payload: request
  };

}

/*
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
*/
