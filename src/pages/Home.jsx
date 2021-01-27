import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoaderNew } from '../components';

import { fetchBooks } from '../redux/actions/books';
import Pagination from '../components/Pagination';
import PostBlock from '../components/PostBlock';
import { removeFavoriteItem } from '../redux/actions/favorite';

function Home () {

  const dispatch = useDispatch();
  
  const items = useSelector(({ books }) => books.items);
  const isLoaded = useSelector(({ books }) => books.isLoaded);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const [productDataList, setProductDataList] = React.useState([]);

  function onChangePage(pageOfItems) {
    setProductDataList(pageOfItems)
  }
  const handleAddPostToFavorite = (obj) => {
    dispatch({
      type: 'ADD_POST_FAV',
      payload: obj,
    });
  };
  const onRemoveItem = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(removeFavoriteItem(id));
    }
  };
  

  return(
      <div className="news">
        { isLoaded ? 
          <div className="news-block">
            <div className="news__item-main">
              <PostBlock
                onRemove={onRemoveItem}
                onClickAddPost={handleAddPostToFavorite}
                key={items[0].id}
                {...items[0]}
              />
            </div>
            <div className="news__list">
              {productDataList.map((obj, index) => {
                return (
                  <PostBlock
                    onRemove={onRemoveItem}
                    onClickAddPost={handleAddPostToFavorite}
                    key={obj.id}
                    mark={false}
                    {...obj}
                  />
                );
              })}
              <Pagination
                pageSize={6}
                items={items}
                onChangePage={onChangePage}
              />
            </div>
          </div>
        : <LoaderNew/>}
      </div>
  )
}

export default Home;