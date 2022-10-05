import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recieveMissions } from '../../Redux/Missions/missions';
import MissionItem from './MissionItem';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(recieveMissions());
  });

  return (
    <div>
      <hr />
        <tbody>
          {missions.map((mission) => (
            <MissionItem key={mission.mission_id} mission_id={mission.mission_id} mission_name={mission.mission_name} description={mission.description} />
          ))}
        </tbody>
    </div>
  );
}

export default Missions;
