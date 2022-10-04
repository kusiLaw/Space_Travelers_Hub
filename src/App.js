import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dragon from './Components/Pages/Dragons';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/dragon" element={<Dragon />} />
      </Routes>
    </>
  );
}

export default App;
