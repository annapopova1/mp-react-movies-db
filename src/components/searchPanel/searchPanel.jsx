import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavPanel } from "../navPanel/navPanel";

const ENTER_KEY_CODE = 13;

export class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByParam: props.searchByParam,
      searchString: props.searchString
    };
  }

  componentDidMount() {
    this.searchBoxRef.value = this.state.searchString;
  }

  onKeyUp = event => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY_CODE) {
      this.handleSearch();
    }
  }

  onChangeSearchPattern = event => {
    this.setState({
      ...this.state,
      searchString: this.searchBoxRef.value
    });
  }

  handleSearchBy = searchByParam => e => {
    this.setState({
      ...this.state,
      searchByParam: searchByParam
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
            ref={(node) => { this.searchBoxRef = node; }} />
        </div>
        <NavPanel
          direction={'left'}
          secondaryBrand={'SEARCH BY'}
          links={[
            { title: 'TITLE', param: 'title', active: this.state.searchByParam === 'title', handler: this.handleSearchBy },
            { title: 'DIRECTOR', param: 'director', active: this.state.searchByParam === 'director', handler: this.handleSearchBy }]}
          navBtn={{ title: 'SEARCH', handler: this.handleSearch }} />
      </section>
    );
  }
}

SearchPanel.PropTypes = {
  searchByParam: PropTypes.string,
  searchString: PropTypes.string
}

SearchPanel.defaultProps = {
  searchByParam: 'title',
  searchString: ''
}
