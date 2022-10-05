/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { book, leave } from '../../Redux/Missions/missions';
import '../style/missions.css';

const MissionItem = ({
  mission_id, missionName, description, reserved,
}) => {
  const dispatch = useDispatch();

  const reserve = (e) => {
    e.preventDefault();
    console.log('booking', mission_id, 'reserved was', reserved);
    dispatch(book(mission_id));
  };

  const leaveMission = (e) => {
    e.preventDefault();
    dispatch(leave(mission_id));
  };

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>
        <div className={reserved ? 'join' : 'leave'}>
          {reserved ? 'Active Member' : 'Not A Member'}
        </div>
      </td>
      <td>
        <button type="button" onClick={reserve} className={reserved ? 'joinButton hide' : 'joinButton show'}>Join Mission</button>
        <button type="button" onClick={leaveMission} className={reserved ? 'leavButton show' : 'leavButton hide'}>Leave Mission</button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mission_id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
