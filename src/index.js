// yes react
import React from 'react';

// dom, render
import { render } from 'react-dom';

// redux has router provider
import { Provider } from 'react-redux';

// store, compose stuff into store
import configureStore from './store/configureStore';

// html template
import ItemList from './components/ItemList';

// return a store
const store = configureStore();

// display
// redux provider with store
// item list template
// inject into app
render(
  <Provider store={store}>
    <ItemList />
  </Provider>,
  document.getElementById('app')
);
