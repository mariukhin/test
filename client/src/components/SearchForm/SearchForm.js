import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    inputVal: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
  };

  render() {
    const { inputVal } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          name="inputVal"
          value={inputVal}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}
