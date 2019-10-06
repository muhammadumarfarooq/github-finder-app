import React, { useContext } from "react";
import RepoItem from "./RepoItem";

import GithubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  return githubContext.repos.map(userRepo => (
    <RepoItem userRepo={userRepo} key={userRepo.id} />
  ));
};

export default Repos;
