import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRocketData } from '../../Redux/Rockets/rocket';
import style from '../style/Rocket.module.css';

const Rocket = () => {
  // get data from store
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  // console.log(rockets)

  useEffect(() => {
    if (rockets.rocketList.length === 0) {
      dispatch(getRocketData());
    }
  }, []);// call when page load

  return (
    <section className="rocket-container">
      <ul className={style.rocket_list}>
        {
     rockets.rocketList.map((items) => (
       <li key={items.id} className={style.rocket_list_item}>
         <div className="rocket-img-container">
           <img src={items.flickerImages[0]} alt="rocket" width="300" height="280" />
         </div>
         <div className={style.rocket_body_container}>
           <h2>{items.rocketName}</h2>
           <p>
             <span />
             {items.description}
           </p>
           <button className={style.btn_reserved} type="button">Reserve Rocket</button>
         </div>
       </li>
     ))
    }
      </ul>
    </section>
  );
};

export default Rocket;
