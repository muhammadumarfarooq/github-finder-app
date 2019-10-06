import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onInputChange = e => {
    setText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something!", "light");
    } else {
      githubContext.handleSearchUsers(text);
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onFormSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onInputChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearSearch}
          className='btn btn-light btn-block'
        >
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
