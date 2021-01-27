import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from '../redux/actions/books';
import PostBlock from "./PostBlock";


function Search() {

  const dispatch = useDispatch();
  
  const items = useSelector(({ books }) => books.items);
  const isLoaded = useSelector(({ books }) => books.isLoaded);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bySearch = (user, search) => {
    if (search) {
      return user.summary.toLowerCase().includes(search.toLowerCase()) || user.headline.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (items, search) => {
    return items
      .filter(user => bySearch(user, search));
  };

  return (
    <div className="search">
     
      <i class="fa fa-search" aria-hidden="true"></i>
      <input
        type="search"
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
      />
      
      {filteredList(items, search).map((obj) => (
         <PostBlock
          key={obj.id}
          {...obj}
         />
      ))}
    </div>
  );
}
export default Search;

