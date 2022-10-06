import React from 'react';
import { useSelector } from 'react-redux';
import style from '../style/myProfile.module.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const dragons = useSelector((state) => state.dragons);
  const joinedMissions = useSelector(state => state.missions.filter((mission) => mission.reserved));

  return (
    <div className={style.profile_container}>

      <div className={style.reserved_container}>
      <h2>My Missions</h2>
            <ul>
              {joinedMissions.map((mission) => <li key={mission.mission_id}>{mission.missionName}</li>)}
            </ul> 
      </div>

      <div className={style.reserved_container}>
        <h2>My Rockets</h2>
        <ul>
          {
         rockets.rocketList.filter((el) => el.reserved).map(
           (el) => (<li key={el.id}>{el.rocketName}</li>),
         )
        }
        </ul>
      </div>

      <div className={style.reserved_container}>
        {/* add dragon reserve here */}
        <h2>dragon here</h2>
        <ul>
          {
            dragons.filter((dragon) => dragon.reserved).map(
              (dragon) => (<li key={dragon.id}>{dragon.designation}</li>),
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
