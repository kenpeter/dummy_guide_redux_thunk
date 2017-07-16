// combine all reducers from reducer
import { combineReducers } from 'redux';
// custom reducers
// those reducers are like global vars
import { items, itemsHasErrored, itemsIsLoading } from './items';

// export default
// combine reducers
export default combineReducers({
  // list items
  items,
  // has error
  itemsHasErrored,
  // it is loading
  itemsIsLoading
});
