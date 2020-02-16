import React from 'react';
import NavBar from './pages/NavBar';
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './pages/Homepage';
import About from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App blue lighten-4">
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
