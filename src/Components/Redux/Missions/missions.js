// Action types
const READ = 'spaceTravel/missions/READ';

// Action creators
export const read = (missions) => ({
  type: READ,
  payload: missions,
});

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
