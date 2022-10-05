/* eslint-disable camelcase */
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
  };

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>status</td>
      <td>
        <button type="button" onClick={reserve}>Join Mission</button>
        <button type="button">Leave Mission</button>
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
