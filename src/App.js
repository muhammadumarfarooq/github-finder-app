import React from "react";
import "./App.css";
import Nabvar from "./components/layout/Nabvar";
import UserItem from "./components/users/UserItem";

function App() {
  return (
    <div className='App'>
      <Nabvar />
      <UserItem />
    </div>
  );
}

export default App;
