import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsScroller extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1
        }
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=6404497bb2b5400cba109f5920a7a273&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            articles: ParsedData?.articles,
            totalResults: ParsedData?.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=6404497bb2b5400cba109f5920a7a273&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(ParsedData?.articles),
            page: this.state.page + 1
        })
    };

    render() {
        return (
            <div className='my-3'>
                <h2 className='mb-3'>Latest Cricket News</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length <= this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state?.articles.map((element) => {
                                return (<div className='col-md-3'>
                                    <NewsItem title={element?.title?.slice(0, 60) + '...'} desc={element?.description?.slice(0, 88) + '...'} imgURL={element?.urlToImage} postURL={element?.url} author={element?.author} date={element?.publishedAt} />
                                </div>);
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default NewsScroller
