import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryPage.module.css';

export default class HistoryPage extends Component {
  render() {
    // const { historyArr } = this.state;
    return (
      <div className={styles.container}>
        <p className={styles.title}>History</p>
        {/* <div>{historyArr.}</div> */}
      </div>
    );
  }
}
