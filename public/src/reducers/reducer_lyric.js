import { FETCH_LYRIC } from '../actions/index';

export default function (state = null, action) {
  console.log("reducerlyric", action);
  switch (action.type) {
  case FETCH_LYRIC:
    console.log("fetchlyricreturn", action.payload.data.message.body.lyrics);
    return action.payload.data.message.body.lyrics;
  }
  return state;
}
