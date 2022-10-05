import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import { reducerDragons } from './Dragons/Dragons';
import rocketReducer from './Rockets/rocket';

const rootReducer = combineReducers(
  {
    missions: missionsReducer,
    dragons: reducerDragons,
    rockets: rocketReducer,
  },
);

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
