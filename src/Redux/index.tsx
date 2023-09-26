import { combineReducers } from 'redux';
import {header} from '../Redux/Header/headerReducer';

const rootReducer = combineReducers({
  header,
})

export default rootReducer
