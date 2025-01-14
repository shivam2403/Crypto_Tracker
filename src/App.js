import './App.css';
import Header from './components/Common/Header'
import MainComponent from './components/LandingPage/MainComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/coin/:id' element={<CoinPage/>}/>
          <Route path='/compare' element={<ComparePage/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
