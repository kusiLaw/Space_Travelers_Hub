import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
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
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>empty</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              mission_id={mission.mission_id}
              missionName={mission.missionName}
              description={mission.description}
              reserved={mission.reserved}
            />

          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
