/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { book, leave } from '../../Redux/Missions/missions';
import '../style/missions.css';

const buttonStyle = {
  width: '100%',
  border: 'solid 1px',
  padding: '10px',
};

const MissionItem = ({
  mission_id, missionName, description, reserved,
}) => {
  const dispatch = useDispatch();

  const reserveMission = (e) => {
    e.preventDefault();
    dispatch(book(mission_id));
  };

  const leaveMission = (e) => {
    e.preventDefault();
    dispatch(leave(mission_id));
  };

  return (
    <tr>
      <td style={{ fontWeight: 'bold' }}>{missionName}</td>
      <td>{description}</td>
      <td className="status">
        <div>
          {reserved
            ? <Badge bg="info">Active Member</Badge>
            : <Badge bg="secondary">Not A Member</Badge>}
        </div>
      </td>
      <td className="status">
        <button
          style={buttonStyle}
          type="button"
          onClick={reserveMission}
          className={reserved ? 'join hide' : 'join show'}
        >
          Join Mission
        </button>
        <button
          style={buttonStyle}
          type="button"
          onClick={leaveMission}
          className={reserved ? 'leave show' : 'leave hide'}
        >
          Leave Mission
        </button>
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
