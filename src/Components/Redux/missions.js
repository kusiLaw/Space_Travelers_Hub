// Action types
const READ = 'spaceTravel/missions/READ';

// Action creators
export const read = (missions) => ({
  type: READ,
  payload: missions,
});
