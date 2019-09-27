import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    handleSearchUsers: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    showButton: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something!", "light");
    } else {
      this.props.handleSearchUsers(this.state.text);
    }
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onFormSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onInputChange}
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showButton && (
          <button
            onClick={this.props.clearSearch}
            className='btn btn-light btn-block'
          >
            clear
          </button>
        )}
      </div>
    );
  }
}
export default Search;
