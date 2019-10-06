import React, { Fragment } from "react";

import Users from "../users/Users";
import Search from "../layout/Search";
import Alert from "../layout/Alert";

const Home = () => (
  <Fragment>
    <Alert />
    <Search />
    <Users />
  </Fragment>
);

export default Home;
