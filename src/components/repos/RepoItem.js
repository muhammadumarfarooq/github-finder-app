import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ userRepo }) => {
  return (
    <div className='card'>
      <a href={userRepo.html_url} target='_blank' rel='noopener noreferrer'>
        {userRepo.name}
      </a>
    </div>
  );
};

RepoItem.propTypes = {
  userRepo: PropTypes.object.isRequired
};

export default RepoItem;
