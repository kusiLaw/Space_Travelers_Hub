import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { book } from '../../Redux/Missions/missions';

const MissionItem = ({
  mission_id, missionName, description, reserved,
}) => {
  const dispatch = useDispatch();

  const reserve = (e) => {
    e.preventDefault();
    console.log('booking', mission_id, 'reserved was', reserved);
    dispatch(book(mission_id));
    console.log('reserved is now', reserved);
  };

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>status</td>
      <td>
        <button onClick={reserve}>Join Mission</button>
        <button>Leave Mission</button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
