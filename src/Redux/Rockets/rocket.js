import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocketList: [
  ],

};

export const getRocketData = createAsyncThunk(
  'rocket/getRockData',
  async () => {
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const formatApiData = (payload) => payload.map((el) => ({
  id: el.id,
  rocketName: el.rocket_name,
  description: el.description,
  flickerImages: el.flickr_images,
}));

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
  },

  extraReducers: {
    [getRocketData.fulfilled]:
    (state, { payload }) => ({
      rocketList: formatApiData(payload),
    })
    ,
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
