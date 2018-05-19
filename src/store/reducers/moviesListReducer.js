import {
  SEARCH_BY,
  SET_SEARCH_STRING,
  SAVE_SEARCH_MOVIES_RESULT,
  SORT_BY,
} from '../actions/actionTypes';

const initialState = {
  searchByParam: 'title',
  searchString: '',
  sortByParam: 'release_date',
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY:
      return {
        ...state,
        searchByParam: action.searchByParam,
      };
    case SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.searchString,
      };
    case SAVE_SEARCH_MOVIES_RESULT:
      return {
        ...state,
        movies: action.movies,
      };
    case SORT_BY:
      return {
        ...state,
        sortByParam: action.sortByParam,
        movies: [],
      };
    default:
      return state;
  }
};
