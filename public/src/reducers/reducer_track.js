import { FETCH_TRACK } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
  case FETCH_TRACK:
    console.log(action);
    return action.payload.track;
    //.payload.data.message.body.track_list[0].track;
    //return [action.payload.data, ...state];
  }
  return state;
}
