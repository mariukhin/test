import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ cards }) => (
  <ul className={styles.gallery}>
    {cards.map(card => (
      <GalleryItem key={card.id} url={card.url} />
    ))}
  </ul>
);
Gallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default Gallery;
