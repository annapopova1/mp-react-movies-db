import { isEmpty } from 'lodash';
import {
  SEARCH_BY,
  SET_SEARCH_STRING,
  SAVE_SEARCH_MOVIES_RESULT,
  SORT_BY,
} from './actionTypes';
import MovieService from '../../services/MovieService';

export const saveSearchMovies = movies => ({
  type: SAVE_SEARCH_MOVIES_RESULT,
  movies,
});

const search = async (dispatch, getState) => {
  const { searchString, searchByParam, sortByParam } = getState().moviesList;
  if (!isEmpty(searchString)) {
    const movies = await MovieService.search(searchString, searchByParam, sortByParam);
    dispatch(saveSearchMovies(movies));
  }
};

export const searchBy = searchByParam => ({
  type: SEARCH_BY,
  searchByParam,
});

export const setSearchString = searchString => ({
  type: SET_SEARCH_STRING,
  searchString,
});

export const searchMovies = str => (dispatch, getState) => {
  dispatch(setSearchString(str));
  search(dispatch, getState);
};

export const sortBy = sortByParam => ({
  type: SORT_BY,
  sortByParam,
});

export const sortMovies = param => (dispatch, getState) => {
  dispatch(sortBy(param));
  search(dispatch, getState);
};
