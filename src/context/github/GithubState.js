import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  GET_USER,
  SET_LOADING,
  GET_REPOS,
  CLEAR_USERS,
  SEARCH_USERS
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search users
  const handleSearchUsers = async text => {
    setLoading();
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}
        }`
    );

    dispatch({ type: SEARCH_USERS, payload: users.data.items });
  };
  //get user
  const getUser = async userName => {
    setLoading();

    const user = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}
        }`
    );

    dispatch({ type: GET_USER, payload: user.data });
  };
  //get repos
  const getRepos = async userName => {
    const userRepos = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}
        }`
    );
    dispatch({ type: GET_REPOS, payload: userRepos.data });
  };
  //clear users
  const clearSearch = () => {
    dispatch({ type: CLEAR_USERS });
  };
  //set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        handleSearchUsers,
        clearSearch,
        getUser,
        getRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
