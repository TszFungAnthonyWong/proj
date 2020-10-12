import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import ProjectManagement from './Pages/ProjectManagement';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>



        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <ProjectManagement />

          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}




export default App;
