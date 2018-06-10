import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { MainContainerUI } from './mainContainer';
import { MOVIES_LIST } from '../../../test/movies.test-data';

describe('<MainContainer/>', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const history = { push: jest.fn() };

  test('should render MainContainer component', () => {
    const app = shallow(<MainContainerUI
      sortByParam="release_date"
      movies={MOVIES_LIST}
      history={history}
    />);
    expect(app).toMatchSnapshot();
  });

  test('should handle sort action', () => {
    const store = mockStore({
      moviesList: {
        searchByParam: 'title',
        searchString: 'test',
        sortByParam: 'release_date',
        movies: [],
      },
    });
    const sortHandler = jest.fn();
    const getComp = () => (
      <Provider store={store}>
        <MemoryRouter>
          <MainContainerUI
            sortByParam="release_date"
            movies={MOVIES_LIST}
            sortMovies={sortHandler}
            history={history}
          />
        </MemoryRouter>
      </Provider>);
    const app = mount(getComp());

    app.find('a').last().simulate('click');
    expect(sortHandler).toBeCalledWith('vote_average');
  });
});
