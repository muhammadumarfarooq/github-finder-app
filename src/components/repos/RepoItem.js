import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ userRepo }) => {
  return (
    <div className='card'>
      <a href={userRepo.html_url}>{userRepo.name}</a>
    </div>
  );
};

RepoItem.propTypes = {
  userRepo: PropTypes.object.isRequired
};

export default RepoItem;
