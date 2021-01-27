export const addPostToFavorite = (itemsObj) => ({
  type: 'ADD_POST_FAV',
  payload: itemsObj,
});
  
export const clearFavorite = () => ({
  type: 'CLEAR_FAV',
});

export const removeFavoriteItem = (id) => ({
  type: 'REMOVE_FAV_ITEM',
  payload: id,
});
