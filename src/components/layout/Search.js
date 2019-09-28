import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showButton, clearSearch, setAlert, handleSearchUsers }) => {
  const [text, setText] = useState("");

  const onInputChange = e => {
    setText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something!", "light");
    } else {
      handleSearchUsers(text);
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
      {showButton && (
        <button onClick={clearSearch} className='btn btn-light btn-block'>
          clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  handleSearchUsers: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showButton: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
