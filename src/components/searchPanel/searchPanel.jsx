import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavPanel from '../navPanel/navPanel';

const ENTER_KEY_CODE = 13;

export default class SearchPanel extends Component {
  static propTypes = {
    searchByParam: PropTypes.string,
    searchString: PropTypes.string,
    searchHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchByParam: 'title',
    searchString: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchByParam: props.searchByParam,
      searchString: props.searchString,
    };
  }

  componentDidMount() {
    if (this.searchBoxRef) {
      this.searchBoxRef.value = this.state.searchString;
    }
  }

  onKeyUp = (event) => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY_CODE) {
      this.handleSearch();
    }
  }

  onChangeSearchPattern = () => {
    this.setState({
      ...this.state,
      searchString: this.searchBoxRef.value,
    });
  }

  handleSearchBy = searchByParam => () => {
    this.setState({
      ...this.state,
      searchByParam,
    });
  }

  handleSearch = () => {
    this.props.searchHandler({ ...this.state });
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
            onBlur={this.onChangeSearchPattern}
            ref={(node) => { this.searchBoxRef = node; }}
          />
        </div>
        <NavPanel
          direction="left"
          secondaryBrand="SEARCH BY"
          links={[
            {
 title: 'TITLE', param: 'title', active: this.state.searchByParam === 'title', handler: this.handleSearchBy,
},
            {
 title: 'DIRECTOR', param: 'director', active: this.state.searchByParam === 'director', handler: this.handleSearchBy,
}]}
          navBtn={{ title: 'SEARCH', handler: this.handleSearch }}
        />
      </section>
    );
  }
}
