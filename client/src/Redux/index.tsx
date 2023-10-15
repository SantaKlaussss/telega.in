import { combineReducers } from 'redux';
import { header } from '../Redux/Header/headerReducer';
import { catalog } from '../Redux/Catalog/catalogReducer';

const rootReducer = combineReducers({
  header,
  catalog,
})

export default rootReducer
