import React from 'react';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../actions/news';
import ErrorDiv from '../../components/ErrorDiv/ErrorDiv';
import Loader from '../../components/Loader/Loader';
import NewsGrid from '../../components/Grid/Grid';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import './NewsView.css';

class NewsView extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchTopHeadlines();
  }

  render() {
    const hasErrorHappened = !!this.props.news.error;

    return (
      <div className="news-view">
        <ErrorDiv showErrorMessage={hasErrorHappened} />
        <Loader showLoader={this.props.news.fetching} />

        <NewsGrid>
          {this.props.news.headlines.map( (article, index) => <ArticleThumbnail key={index} article={article} />)}
        </NewsGrid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopHeadlines: () => dispatch(fetchTopHeadlines())
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (NewsView);