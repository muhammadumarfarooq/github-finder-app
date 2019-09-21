import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Nabvar from "./components/layout/Nabvar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    loading: "false",
    users: []
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const users = await axios.get("https://api.github.com/users");
    this.setState({ loading: false, users: users.data });
  }
  render() {
    return (
      <div className='App'>
        <Nabvar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
