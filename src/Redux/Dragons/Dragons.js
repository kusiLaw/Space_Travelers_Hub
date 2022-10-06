import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_DRAGON = 'GET_DRAGON';
const BOOK_DRAGON = 'BOOK_DRAGON';
const CANCEL_DRAGON = 'CANCEL_DRAGON';
const initialState = [];
const baseURL = 'https://api.spacexdata.com/v3/dragons';

const reducerDragons = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DRAGON}/fulfilled`:
      return [...state, ...action.payload];
    case `${BOOK_DRAGON}`:
      return state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      });
    case `${CANCEL_DRAGON}`:
      return state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      });
    default: return state;
  }
};

const getDragons = createAsyncThunk(GET_DRAGON,
  async () => {
    const response = await axios.get(baseURL);
    const data = await response.data.map((dragon) => ({
      id: dragon.id,
      designation: dragon.name,
      type: dragon.type,
      image: dragon.flickr_images[0],
      description: dragon.description,
      reserved: false,
    }));
    return data;
  });

const bookDragon = (id) => ({
  type: BOOK_DRAGON,
  payload: id,
});

const cancelDragon = (id) => ({
  type: CANCEL_DRAGON,
  payload: id,
});

export {
  reducerDragons,
  getDragons,
  bookDragon,
  cancelDragon,
};
