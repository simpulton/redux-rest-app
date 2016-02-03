import { combineReducers } from 'redux';
import { items, selectedItem } from './common/items.reducers';

let rootReducer = combineReducers({
  items,
  selectedItem
});

export default rootReducer;
