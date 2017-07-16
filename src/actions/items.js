// export func
// item has erorr
// they are actions like click, bla bla
// arg bool
export function itemsHasErrored(bool) {
  // return action with type and field
  return {
    // type item has error
    type: 'ITEMS_HAS_ERRORED',
    // field: true or false
    hasErrored: bool
  };
}

// export func
// item is loading true or false
export function itemsIsLoading(bool) {
  //
  return {
    //
    type: 'ITEMS_IS_LOADING',
    //
    isLoading: bool
  };
}

// the idea is get it and pass it
export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

// url func
export function itemsFetchData(url) {
  // send
  // send item is loading
  return (dispatch) => {
    // it is loading
    dispatch(itemsIsLoading(true));

    //
    fetch(url)
      .then((response) => {
        // not ok
        if (!response.ok) {
          // throw error
          throw Error(response.statusText);
        }

        // else not loading
        dispatch(itemsIsLoading(false));

        // return response
        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((items) => dispatch(itemsFetchDataSuccess(items))) // does it mean can keep chaining .them, see above
      .catch(() => dispatch(itemsHasErrored(true)));
    };
}
