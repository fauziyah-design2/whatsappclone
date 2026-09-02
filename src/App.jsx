import React, { useState } from 'react';
import { BrowserRouter  as Router, Route, Switch, } from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [isSidebarOpen, setIsSidebarOpen] = useState();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
            <Router> 
              <Sidebar/>
            <Switch>
            <Route path="/room/:roomId">
            <Chat/>
            </Route>
            <Route path="/"></Route>
          </Switch>
        </Router>

        </div>
      )}
    </div>
  );
}

