import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Nabvar from "./components/layout/Nabvar";
import Users from "./components/users/Users";
import Search from "./components/layout/Search";

class App extends Component {
  state = {
    loading: false,
    users: []
  };

  // Search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        }`
    );
    this.setState({ loading: false, users: users.data.items });
  };

  render() {
    return (
      <div className='App'>
        <Nabvar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
