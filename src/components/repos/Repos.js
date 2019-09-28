import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = ({ userRepos }) => {
  return userRepos.map(userRepo => (
    <RepoItem userRepo={userRepo} key={userRepo.id} />
  ));
};

RepoItem.PropTypes = {
  userRepos: PropTypes.object.isRequired
};

export default Repos;
