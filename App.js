import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigation';
import placesReducer from './store/places-reducer';
import placesAction from './store/places-action';

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App () {
  return (
    <Provider store={store}>
      <PlacesNavigator/>
    </Provider>
  );
}
