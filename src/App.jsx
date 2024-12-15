import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
// import Home from './Home';
import './App.css'; 

function App() {
  const user = {
    name: 'John Doe',
    bio: 'Software Developer',
    location: 'San Francisco, CA',
    joinedDate: '2020-01-01',
    followers: 120,
    following: 150,
  };

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile">
                <Profile user={user} />
              </Route>
              {/* Add other routes here */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;