import React from 'react';
import { connect } from 'react-redux';
import { fetchUrbanDefinitions } from '../../actions/urban';
import ErrorDiv from '../../components/ErrorDiv/ErrorDiv';
import Loader from '../../components/Loader/Loader'
import SearchBar from '../../components/SearchBar/SearchBar';
import UrbanDefinitionCard from '../../components/UrbanDefinitionCard/UrbanDefinitionCard';
import queryString from 'query-string';
import './UrbanDictView.css';

class UrbanDict extends React.Component {
  constructor(props) {
    super(props);

    this.searchDefinition = this.searchDefinition.bind(this);

    let search = queryString.parse(this.props.location.search);
    if (search.term) {
      this.searchDefinition(search.term);
    }
  }

  searchDefinition(term) {
    this.props.fetchUrbanDefinitions(term);
      this.props.history.push({
        search: `?${queryString.stringify({term})}`
      });
  }

  renderUrbanDefinitionCards() {
    return this.props.urban.definitions.map( def => (
      <UrbanDefinitionCard
        key={def.defid}
        definition={def}
      />
    ));
  }

  render() {
    return (
      <div className="urban-dict-view">
        <SearchBar onSearch={this.searchDefinition} />

        <ErrorDiv showErrorMessage={!!this.props.error} />
        <Loader showLoader={this.props.urban.fetching} />

        <div className="urban-def-cards">
          {this.renderUrbanDefinitionCards()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    urban: state.urban
  };
}

function mapDispathToProps(dispatch) {
  return {
    fetchUrbanDefinitions: term => dispatch(fetchUrbanDefinitions(term))
  };
}

export default connect(mapStateToProps, mapDispathToProps) (UrbanDict);