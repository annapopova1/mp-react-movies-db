import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavPanel from '../navPanel/navPanel';
import { searchBy, searchMovies } from '../../store/actions/moviesListActions';

const ENTER_KEY_CODE = 13;

export class SearchPanelUI extends Component {
  static propTypes = {
    searchByParam: PropTypes.string,
    searchString: PropTypes.string,
    toggleSearchBy: PropTypes.func,
    search: PropTypes.func,
  };

  static defaultProps = {
    searchByParam: 'title',
    searchString: '',
    toggleSearchBy: () => {},
    search: () => {},
  };

  componentDidMount() {
    if (this.searchBoxRef) {
      this.searchBoxRef.value = this.props.searchString;
    }
  }

  onKeyUp = (event) => {
    const { keyCode } = event;
    if (keyCode === ENTER_KEY_CODE) {
      this.handleSearch();
    }
  }

  handleSearchBy = searchByParam => () => {
    this.props.toggleSearchBy(searchByParam);
  }

  handleSearch = () => {
    this.props.search(this.searchBoxRef.value);
  }

  render() {
    return (
      <section>
        <h5>FIND YOUR MOVIE</h5>
        <div className="form-label-group">
          <input
            type="text"
            id="searchBox"
            className="form-control"
            placeholder="Search..."
            onKeyUp={this.onKeyUp}
            ref={(node) => { this.searchBoxRef = node; }}
          />
        </div>
        <NavPanel
          direction="left"
          secondaryBrand="SEARCH BY"
          links={[
            {
 title: 'TITLE', param: 'title', active: this.props.searchByParam === 'title', handler: this.handleSearchBy,
},
            {
 title: 'GENRE', param: 'genres', active: this.props.searchByParam === 'genres', handler: this.handleSearchBy,
}]}
          navBtn={{ title: 'SEARCH', handler: this.handleSearch }}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { searchByParam, searchString } = state.moviesList;
  return {
    searchByParam,
    searchString,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleSearchBy: (searchByParam) => {
    dispatch(searchBy(searchByParam));
  },
  search: (searchString) => {
    dispatch(searchMovies(searchString));
  },
});

const SearchPanel = connect(mapStateToProps, mapDispatchToProps)(SearchPanelUI);
export default SearchPanel;
