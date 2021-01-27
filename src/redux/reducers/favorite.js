const initialState = {
    items: {},
};
  
const favorite = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST_FAV': {
      const currentPostsItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPostsItems,
        },
      };

      return {
        ...state,
        items: newItems,
      };
    }

    case 'REMOVE_FAV_ITEM': {
      const newItems = {
        ...state.items,
      };
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
      };
    }

    case 'CLEAR_FAV':
      return { items: {} };

    default:
      return {...state};
  }
};

export default favorite;