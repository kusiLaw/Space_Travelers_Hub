import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ missionName, description }) => (
  <tr>
    <td>{missionName}</td>
    <td>{description}</td>
    <td>status</td>
    <td>join/leave</td>
  </tr>
);

MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
