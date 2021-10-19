import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imageUrl, url, author, date, source} = props;
    return (
        <div>
            <div className="card">
            <img src={imageUrl?imageUrl:"https://media.istockphoto.com/vectors/breaking-news-with-world-map-vector-id1033540092?k=6&m=1033540092&s=612x612&w=0&h=BZQ1tyrlux6ojLKOkXfgiUgs-CBZ_cd1_yiJg8hhNac="} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="badge bg-secondary">{source}</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {date}</small></p>
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
        </div>
    )
}

export default NewsItem
