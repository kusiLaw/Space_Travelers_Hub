import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recieveMissions } from '../Redux/Missions/missions';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(recieveMissions());
  });

  return (
    <div>
      <h1>Missions page is under construction</h1>
    </div>
  );
}

export default Missions;
