import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import missionsReducer from './missions/missions';

const rootStore = combineReducers({
   missions: missionsReducer,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;
