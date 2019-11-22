import React from 'react';
import './App.css';
import Posts from './Posts'
import TopBar from './TopBar';
import UserProfile from './UserProfile';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <TopBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
