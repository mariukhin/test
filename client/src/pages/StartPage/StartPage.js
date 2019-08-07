import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { mapper } from '../../services/helper';
import SearchForm from '../../components/SearchForm/SearchForm';
import Gallery from '../../components/Gallery/Gallery';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import fetchPics from '../../services/pic-api';
import styles from './StartPage.module.css';


export default class StartPage extends Component {
  state = {
    pics: [],
    page: 1,
    inputVal: '',
    isLoadMore: false,
  };

  componentDidMount() {
    this.fetchLikedItems();
    this.fetchItems('popular');
  }

  componentDidUpdate(prevProps, prevState) {
    const { page: prevPage, pics } = prevState;
    const { page: nextPage, inputVal } = this.state;

    if (prevPage !== nextPage && pics.length >= 12) {
      this.fetchItems(inputVal);
    }
    // window.scrollTo({ left: 0, top: 1300 * nextPage, behavior: 'smooth' });
  }

  reset = () => {
    this.setState({
      pics: [],
      page: 0,
      inputVal: '',
      isLoadMore: false,
    });
  };

  //   fetchLikedItems = () => {
  //     const { pics, page } = this.state;
  //     fetchLikedPics()
  //       .then(pics => this.setState({ pics }))
  //       .catch(this.reset());
  //   };

  fetchItems = inputVal => {
    const { pics, page } = this.state;
    fetchPics(inputVal, page)
      .then(newPics => {
        this.setState({
          pics: [...pics, ...mapper(newPics)],
        });
      })
      .catch(this.reset())
      .finally(() => this.setState({ isLoadMore: true }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      isLoadMore: false,
      page: prevState.page + 15,
    }));
  };

  formSubmit = ({ inputVal }) => {
    this.reset();
    this.fetchItems(inputVal);
    this.setState({ isLoadMore: true, inputVal });
  };

  render() {
    const { pics, isLoadMore } = this.state;
    const length = pics.length > 0;
    return (
      <div>
        <div className={styles.container}>
          <SearchForm onSubmit={this.formSubmit} />
          <NavLink to="/history" className={styles.link}>
            History
          </NavLink>
        </div>
        {length && <Gallery cards={pics} />}
        {isLoadMore && length && <LoadMoreBtn onLoadMore={this.loadMore} />}
      </div>
    );
  }
}
