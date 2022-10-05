import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';

const rootReducer = combineReducers(
  {
    missions: missionsReducer,
  });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
