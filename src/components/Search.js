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















// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { useSelector, useDispatch } from 'react-redux';

// import { fetchBooks } from '../redux/actions/books';

// function Search() {

//   const dispatch = useDispatch();
  
//   // const items = useSelector(({ books }) => books.items);
//   const isLoaded = useSelector(({ books }) => books.isLoaded);

//   const [items, setItems] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);

//   // useEffect(() => {
//   //   setLoading(true);
//   //   axios
//   //     .get("https://restcountries.eu/rest/v2/all")
//   //     .then((res) => {
//   //       setItems(res.data);
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // }, []);
//   React.useEffect(() => {
//     dispatch(fetchBooks());
//     setItems(items);
//   }, [dispatch]);

//   useEffect(() => {
//     setFilteredItems(
//       items.filter((item) =>
//         item.id.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, items]);


//   return (
//     <div className="asd">
//       <h1 style={{ color: "red" }} > Lists</h1>
//       <input
//         type="text"
//         placeholder="Search"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {filteredItems.map((item, index) => (
//         <BooksDetail key={index} {...item} />
//       ))}
//     </div>
//   );
// }

// const BooksDetail = (props) => {
//   const { id, image } = props;

//   return (
//     <>
//       <p>
//         <img src='' alt={image} style={{ width: "20px", height: "20px" }} />
//       </p>
//       <p>{id}</p>
//     </>
//   );
// };

// export default Search;








// import React, { useState, useEffect } from "react";

// const data = [
//   {
//     id: "1",
//     name: "rex",
//     type: "dog",
//     emoji: "🐶",
//     keywords: ["dog", "friendly", "inteligent"]
//   },
//   {
//     id: "2",
//     name: "garfield",
//     type: "cat",
//     emoji: "🐱",
//     keywords: ["cat", "independent"]
//   },
//   {
//     id: "3",
//     name: "foxy",
//     type: "fox",
//     emoji: "🦊",
//     keywords: ["fox", "inteligent"]
//   },
//   { id: "4", name: "sushi", type: "fish", emoji: "🐟", keywords: [] }
// ];

// export default function Search() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleChange = e => setSearchTerm(e.target.value);

//   useEffect(() => {
//     const results = data.filter(o => o.keywords.includes(searchTerm));
//     setSearchResults(results);
//   }, [searchTerm]);

//   return (
//     <div className="search">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="search"
//       />
//       <p>
//         searchTerm:
//         <br />
//         {searchTerm}
//       </p>
//       <div className="results">
//         <ul>
//           {searchResults &&
//             searchResults.map(item => <li key={item.id}>{item.emoji}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }
