import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
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
            page: this.state.page,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    onHandlePreviousButton = async () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.updateNews();
    }

    onHandleNextButton = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.updateNews();
    }

    render() {
        return (
            <div className='my-3 container'>
                <h2 className='mb-3'>Latest Cricket News</h2>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!(this.state.loading) && this.state?.articles.map((element) => {
                        return (<div className='col-md-3'>
                            <NewsItem title={element?.title?.slice(0, 60) + '...'} desc={element?.description?.slice(0, 88) + '...'} imgURL={element?.urlToImage} postURL={element?.url} author={element?.author} date={element?.publishedAt} />
                        </div>);
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button" disabled={this.state?.page <= 1} className="btn btn-dark" onClick={this.onHandlePreviousButton}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page > Math.ceil(this.state?.totalResults / 20)} className="btn btn-dark" onClick={this.onHandleNextButton}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
