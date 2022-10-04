import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dragon from './Components/Pages/Dragons';
import Mission from './Components/Pages/Missions';
import MyProfile from './Components/Pages/myProfile';
import Rocket from './Components/Pages/Rocket';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
