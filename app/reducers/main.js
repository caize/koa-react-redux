import { combineReducers } from 'redux';
import todo from './todo';

// 通过combineReducers将多个reducer合并成一个rootReducer:
const rootReducer = combineReducers({
  todo
});

export default rootReducer;
