import React, { useContext } from "react";

import UserItem from "./UserItem";
import Loader from "../layout/Loader";

import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users } = githubContext;
  if (githubContext.loading) {
    return <Loader />;
  } else {
    return (
      <div style={style}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
