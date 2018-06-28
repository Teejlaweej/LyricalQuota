import { FETCH_LYRIC } from '../actions/lyric_action';

export default function (state = null, action) {

  switch (action.type) {
  case FETCH_LYRIC:
    return action.payload.data.message.body.lyrics;
  }
  return state;
}
