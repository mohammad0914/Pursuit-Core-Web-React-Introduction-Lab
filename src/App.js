import React from "react";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";

// import "./index.css";

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </>
  )
}

export default App;
