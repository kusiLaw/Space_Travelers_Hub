import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import missionsReducer from './Missions/missions';

const rootStore = combineReducers({
  missions: missionsReducer,
  // Feel free to add your reducers here
});

const store = configureStore({
  reducer: rootStore,
});

export default store;
