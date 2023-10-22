import { combineReducers } from 'redux';
import { header } from '../Redux/Header/headerReducer';
import { catalog } from '../Redux/Catalog/catalogReducer';

export const rootReducer = combineReducers({
  header: header,
  catalog: catalog,
})

export default rootReducer;
