import React from "react";

import propTypes from "prop-types";

import UserItem from "./UserItem";
import Loader from "../layout/Loader";

const Users = ({ loading, users }) => {
  if (loading) {
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

Users.propTypes = {
  loading: propTypes.bool.isRequired,
  users: propTypes.array.isRequired
};

export default Users;
