import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';
import { likePhoto, dislikePhoto } from '../../services/pic-api';

export default class GalleryItem extends Component {
  state = {
    clicked: false,
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  // componentDidUpdate(prevProps, prevState) {}

  onModalHandle = () => {
    const { clicked } = this.state;
    const { userId, url } = this.props;
    this.setState(state => ({
      clicked: !state.clicked,
    }));
    if (clicked) {
      likePhoto(userId, url);
      console.log(userId);
      // updateUser();
    }
    // } else {
    //   this.dislikePhoto();
    // }
  };

  render() {
    const { url } = this.props;
    const { clicked } = this.state;
    return (
      <li className={styles.galleryItem}>
        <img className={styles.galleryItemImg} src={url} alt="img" />

        <button
          type="button"
          className={styles.likeButton}
          onClick={this.onModalHandle}
        >
          {clicked ? (
            <i className="material-icons">favorite</i>
          ) : (
            <i className="material-icons">favorite_border</i>
          )}
        </button>
      </li>
    );
  }
}
