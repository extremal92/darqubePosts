import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})
// export const setMark = (itemsObj) => ({
//     type: 'SET_MARK',
//     payload: itemsObj,
// });

export const fetchBooks = () => (dispatch) => {
    dispatch(setLoadet(false));
    // dispatch(setMark(false));
    axios.get('http://localhost:3001/books')
    // axios.get('https://finnhub.io/api/v1/company-news?symbol=AAPL&amp;from=2020-01-01')
    .then(({ data }) => {
        dispatch(setBooks(data));
    });
};

export const setBooks = (items) => ({
    type: 'SET_BOOKS',
    payload: items,
})