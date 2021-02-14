import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

import Header from './components/Header/Header.component';
import Home from './pages/Home/Home.component';
import About from './pages/About/About.component';
import Projects from './pages/Projects/Projects.component';
import Contact from './pages/Contact/Contact.component';

import './App.scss'

function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Projects } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </div>
    </BrowserRouter>
   
  )
}

export default App;
