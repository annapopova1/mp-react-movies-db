import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppUI } from './app';
import { MOVIES_LIST } from '../../../test/movies.test-data';

describe('<App/>', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  test('should render App component', () => {
    const app = shallow(<AppUI
      sortByParam="release_date"
      movies={MOVIES_LIST}
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
    const app = mount(<Provider store={store}>
      <AppUI
        sortByParam="release_date"
        movies={MOVIES_LIST}
        sortMovies={sortHandler}
      />
                      </Provider>);

    app.find('a').last().simulate('click');
    expect(sortHandler).toBeCalledWith('vote_average');
  });
});
