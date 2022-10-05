import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import { reducerDragons } from './Dragons/Dragons';

const rootReducer = combineReducers(
  {
    missions: missionsReducer,
    dragons: reducerDragons,
  },
);

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
