import { FETCH_LYRIC, FAILED_FETCH } from '../actions/lyric_action';

export default function (state = null, action) {

  switch (action.type) {
  case FETCH_LYRIC:
    console.log(action);
    return action.payload.data.message.body.lyrics;
  case FAILED_FETCH:
    return state;
  }
  return state;
}
