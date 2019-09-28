import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Nabvar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Nabvar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Nabvar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired
};

export default Nabvar;
