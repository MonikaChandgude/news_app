import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title, description, imageUrl, newsUrl, author, date, source}=this.props;
    return (
         <div className="my-3">
            <div className="card">
               <div style={{display:'flex',
                            justifyContent:'flex-end',
                            position:'absolute',
                            right:'0'}}>
                <span className=" badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1'}}>
                    {source}
                    </span>
               </div>
               {/* style={{width: "18rem"}} */}
                <img src={!imageUrl?"https://c.ndtvimg.com/2024-01/13k1v6cg_moreh_625x300_20_January_24.jpeg":imageUrl} className="card-img-top" alt="..."/>
               <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
    
                    

                   <p className="card-text">{description}..</p>
                   <p className="card-text"><small className="text-muted">By {!author?"Unknown": author}, Updated On {new Date(date).toGMTString()}</small></p>
                   <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
                </div>
            </div>

         </div>
    )
  }
}

export default NewsItem
