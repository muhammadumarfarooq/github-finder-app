import React from "react";
import "./App.css";
import Nabvar from "./components/layout/Nabvar";
import Users from "./components/users/Users";

function App() {
  return (
    <div className='App'>
      <Nabvar />
      <div className='container'>
        <Users />
      </div>
    </div>
  );
}

export default App;
