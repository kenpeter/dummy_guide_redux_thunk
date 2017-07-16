// export func
// items have error
// init state false
// action
export function itemsHasErrored(state = false, action) {
  // action type
  switch (action.type) {
    // item have errors
    case 'ITEMS_HAS_ERRORED':
      // return action item has error
      // action has part of state, while store has the full state
      // true or false
      return action.hasErrored;
    default:
      // default just returns back to state
      return state;
  }
}

// export func
// init state false
// action
export function itemsIsLoading(state = false, action) {
  // switch
  // action type
  switch (action.type) {
    // item is loading
    case 'ITEMS_IS_LOADING':
      // action has loading, so true or false
      return action.isLoading;
    default:
      // ...
      return state;
  }
}

// export func
// init state [],
// action
export function items(state = [], action) {
  // switch action type
  switch (action.type) {
    // case
    // item fetch data success
    case 'ITEMS_FETCH_DATA_SUCCESS':
      // actions all items
      return action.items;
    default:
      //
      return state;
  }
}
