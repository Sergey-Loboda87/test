import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SaidBar from './components/SaidBar/SaidBar';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App() {
  return(
  <BrowserRouter>
  <div className = 'App'>
    <div className = 'App-wrapper'>
      <Header />
      <SaidBar />
      <NavBar />
      <div className = 'app-wrapper-content'>
        <Route exact path = '/' componet ={Profile} />
      </div>
    </div>
  </div>

  </BrowserRouter> 
    )
}

export default App;
