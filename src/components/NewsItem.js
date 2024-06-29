import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, imgURL, postURL, author, date} = this.props;
    return (
        <div className="card my-2">
            <img src={imgURL ? imgURL : 'https://i.insider.com/64b66d5076558a00189d1337?width=1200&format=jpeg'} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toDateString()}</small></p>
                <a href={postURL} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
}

export default NewsItem
