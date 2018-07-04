import { FETCH_COVER, FAILED_FETCH } from '../actions/cover_art_action';

export default function (state = null, action) {

  switch (action.type) {
  case FETCH_COVER:
    console.log("ACTION",action);
    return action.payload.data.response.hits[0].result.header_image_url;
  //handles searches where can't find trackID
  case FAILED_FETCH:
    console.log("FAILED");
    return null;
  }
  return state;
}
