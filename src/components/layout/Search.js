import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: propTypes.func.isRequired
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
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
      </div>
    );
  }
}
export default Search;
