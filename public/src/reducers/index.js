import { combineReducers } from 'redux';
import TrackReducer from './reducer_track';
import LyricReducer from './reducer_lyric';
import CoverReducer from './reducer_cover_art';

const rootReducer = combineReducers({
  track: TrackReducer,
  lyric: LyricReducer,
  cover: CoverReducer
});

export default rootReducer;
