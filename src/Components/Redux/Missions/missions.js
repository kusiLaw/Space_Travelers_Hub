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

export const recieveMissions = () => async () => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((res) => res.json())
    .then((missions) => {
      console.log("Missions are", missions);
    });
};

export default missionsReducer;
