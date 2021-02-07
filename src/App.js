import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home.component';
import About from './pages/About/About.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
      </div>
    </BrowserRouter>
  )

}

export default App;
