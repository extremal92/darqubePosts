import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchBooks = () => (dispatch) => {
    dispatch(setLoaded(false));
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