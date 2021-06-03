import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import SaidBar from './components/SaidBar/SaidBar'
import NavBar from './components/NavBar/NavBar'
import Account from './components/Account/Account'
import PrisePlans from './components/PrisePlans/PrisePlans'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-wrapper'>
          <Header />
          <SaidBar />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route exact path='/' component={Profile} />
            <Route path='/profile' component={Profile} />
            <Route path ='/account' component={Account} />
            <Route path ='/prisePlans' component={PrisePlans} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
