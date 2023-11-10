import { combineReducers } from 'redux';
import { header } from '../Redux/Header/headerReducer';
import { catalog } from '../Redux/Catalog/catalogReducer';
import { RootReducer } from './Types';

export const rootReducer = combineReducers<RootReducer>({
  header: header,
  catalog: catalog,
})

export default rootReducer;
