import React from 'react';

const MissionItem = ({ mission_name, description, mission_id }) => {
  console.log(mission_id);

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>status</td>
      <td>join/leave</td>
    </tr>
  );
};

export default MissionItem;
