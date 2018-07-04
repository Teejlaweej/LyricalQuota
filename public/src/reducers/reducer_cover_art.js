import { FETCH_COVER } from '../actions/cover_art_action';

export default function (state = null, action) {

  switch (action.type) {
  case FETCH_COVER:
    console.log(action);
    return action.payload.data.response.hits[0].result.header_image_url;
  case 'FAILED_FETCH':
    return state;
  }
  return state;
}
