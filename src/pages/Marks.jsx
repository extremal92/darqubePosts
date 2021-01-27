import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PostBlock from '../components/PostBlock';

import { clearFavorite, removeFavoriteItem } from '../redux/actions/favorite';

function Marks() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ favorite }) => favorite);

  const addedPosts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearFavorite = () => {
    if (window.confirm('Are you sure you want to clear the list?')) {
      dispatch(clearFavorite());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(removeFavoriteItem(id));
    }
  };

  return (
    <div className="container">
        <div className="bookmarks-title">
            <span>BookMarks</span>
        </div>
      
        <div className="favorite">
          <div className="favorite__top">
            <div className="favorite__clear">
              <button onClick={onClearFavorite}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                <span>Delete All</span>
              </button>
            </div>
          </div>
          <div className="news__list">
            {addedPosts.map((obj) => (
              <PostBlock
                key={obj.id}
                onRemove={onRemoveItem}
                {...obj}
              />
            ))}
          </div>
        </div>
        { Object.keys(items).length ? null :  
          <div className="favorite__empty">
            <h1>Favorite List Empty</h1>
          </div>
        }
        <div className="favorite-back">
          <Link to="/" className="button button--black">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span>Back to main page</span>
          </Link>
        </div>

    </div>
  );
}

export default Marks;