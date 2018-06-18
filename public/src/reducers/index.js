import { combineReducers } from 'redux';
import TrackReducer from './reducer_track';
import LyricReducer from './reducer_lyric';

const rootReducer = combineReducers({
  track: TrackReducer,
  lyric: LyricReducer
});

export default rootReducer;
