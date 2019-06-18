import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString:  ''
    };

    this.onSearchStringChanged = this.onSearchStringChanged.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchStringChanged(e) {
    this.setState({searchString: e.target.value});
  }

  onSearchClick(event) {
    event.preventDefault();
    if (this.props.onSearch === undefined) return;
    this.props.onSearch(this.state.searchString);
  }

  render() {
    return (
      <form onSubmit={this.onSearchClick} className={`input-group mb-3 ${this.props.className}`}>
        <input
          type="text"
          value={this.state.searchString}
          placeholder="City"
          className="form-control"
          onChange={this.onSearchStringChanged}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;