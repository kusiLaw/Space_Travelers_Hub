import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducerDragons } from './Dragons/Dragons';

const rootReducer = combineReducers(
  { dragons: reducerDragons },
);

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
