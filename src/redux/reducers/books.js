const initialState = {
    items: [],
    isLoaded: false
}
const books = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        default:
            return state;
    }
}

export default books;
