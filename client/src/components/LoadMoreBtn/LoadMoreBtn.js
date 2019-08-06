import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => (
  <button type="button" className={styles.button} onClick={onLoadMore}>
    Load more
  </button>
);
LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
