import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

import Header from './components/Header/Header.component';
import Home from './pages/Home/Home.component';
import About from './pages/About/About.component';

import './App.scss'

function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
        </Switch>
      </div>
    </BrowserRouter>
   
  )
}

export default App;
