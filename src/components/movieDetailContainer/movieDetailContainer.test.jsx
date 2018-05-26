import { set } from 'lodash';
import React from 'react';
import { MovieDetailContainerUI } from './movieDetailContainer';
import { MOVIES_LIST } from '../../../test/movies.test-data';

describe('<MovieDetailContainer/>', () => {
  const history = { push: jest.fn() };
  const match = {};
  set(match, 'params.movieId', '123456');

  test('should render MovieDetailContainer component', () => {
    const app = shallow(<MovieDetailContainerUI
      movie={MOVIES_LIST[0]}
      moviesByGenre={[]}
      loadMovie={() => {}}
      isMovieLoading={false}
      match={match}
      history={history}
    />);
    expect(app).toMatchSnapshot();
  });
});
