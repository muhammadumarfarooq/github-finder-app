import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Nabvar from "./components/layout/Nabvar";
import Users from "./components/users/Users";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
  state = {
    loading: false,
    user: {},
    showButton: false,
    users: [],
    userRepos: [],
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
  // Get a single User
  getUser = async userName => {
    this.setState({ loading: true });
    const user = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        }`
    );
    this.setState({
      loading: false,
      user: user.data
    });
  };

  // Get user Repos
  getRepos = async userName => {
    const userRepos = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        }`
    );
    this.setState({
      userRepos: userRepos.data
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
    const { showButton, loading, users, user, userRepos } = this.state;
    return (
      <Router>
        <div className='App'>
          <Nabvar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Alert alert={this.state.alert} />
                    <Search
                      handleSearchUsers={this.handleSearchUsers}
                      showButton={showButton}
                      clearSearch={this.clearSearch}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    userRepos={userRepos}
                    getRepos={this.getRepos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
