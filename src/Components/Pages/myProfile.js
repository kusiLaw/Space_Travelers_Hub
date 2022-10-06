import React from 'react';
import { useSelector } from 'react-redux';
import style from '../style/myProfile.module.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const dragons = useSelector((state) => state.dragons);

  return (
    <div className={style.profile_container}>

      <div className={style.reserved_container}>
        {/* add mission reserve here */}
        <h2>mission here</h2>
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
        <h2>My Dragons</h2>
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
