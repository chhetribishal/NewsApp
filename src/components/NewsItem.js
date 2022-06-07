import React from 'react'

  const  NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2022/02/09/1600x900/ANI-20211220043-0_1644384645638_1644384655463.jpg"}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}
              </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">{author ? `By ${author}` : "By unknown"} on {new Date(date).toUTCString()}</small></p>
              <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem