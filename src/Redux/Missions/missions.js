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

export const recieveMissions = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((res) => res.json())
    .then((missions) => {
      const missionsList = [];
      Object.keys(missions).map((key) => {
        missionsList.push({
          mission_id: missions[key].mission_id,
          missionName: missions[key].mission_name,
          description: missions[key].description,
        });
        return missionsList;
      });
      dispatch(read(missionsList));
    });
};

export default missionsReducer;
