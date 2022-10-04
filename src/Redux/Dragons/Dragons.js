import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_DRAGON = 'GET_DRAGON';
const initialState = [];
const baseURL = 'https://api.spacexdata.com/v3/dragons';

const reducerDragons = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DRAGON}/fulfilled`:
      return [...state, ...action.payload];
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

export { reducerDragons, getDragons };
