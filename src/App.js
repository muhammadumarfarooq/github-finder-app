import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Nabvar from "./components/layout/Nabvar";
import Users from "./components/users/Users";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    loading: false,
    showButton: false,
    users: [],
    alert: null
  };

  // Search github users
  handleSearchUsers = async text => {
    this.setState({ loading: true });
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        }`
    );
    this.setState({
      loading: false,
      users: users.data.items,
      showButton: true
    });
  };
  clearSearch = () => {
    this.setState({ users: [], showButton: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { showButton, loading, users } = this.state;
    return (
      <div className='App'>
        <Nabvar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            handleSearchUsers={this.handleSearchUsers}
            showButton={showButton}
            clearSearch={this.clearSearch}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
