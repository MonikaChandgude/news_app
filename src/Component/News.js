import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
  static defaltProps ={
    country:'in',
    pageSize: 8,
    category:'general'
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props){
    super(props);
    this.state={
       articles: [],
       loading: true,
        page: 1,
        totalResults: 0
    }
    // console.log("construhg");
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    this.props.setProgress(30);
  let parseData= await data.json()
  this.props.setProgress(70);
  console.log(parseData);
    this.setState({articles:parseData.articles, 
      totalResults:parseData.totalResults,
      loading:false
      })
      this.props.setProgress(100);
  }

  async componentDidMount(){
  //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f14ff5a87b4ac6ab02636f9dd656ad&page=1&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data=await fetch(url);
  // let parseData= await data.json()
  // console.log(parseData);
  //   this.setState({articles:parseData.articles, 
  //     totalResults:parseData.totalResults,
  //     loading: false
  //   })
    this.updateNews();
  }

//   handleOnPrev= async()=>{
//    console.log("prev");
//    this.setState({page:this.state.page-1});
//   this.updateNews();
//   }


//  handleOnNext= async ()=>{
//   console.log("next");
//   this.setState({page:this.state.page+1});
//    this.updateNews();
// }

fetchMoreData= async()=>{
   
     const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   // const url= ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7328251d2bd4bfda48d6ed0761053c4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({page:this.state.page+1})
    let data=await fetch(url);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({articles:this.state.articles.concat(parseData.articles), 
    totalResults:parseData.totalResults
  
    })
  
  console.log("done")
};

  render() {

    return (
      <>
        <h2 className="text-center" style={{margin:35, marginTop:90}}>NewsInsights - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner/>} 
       
         <InfiniteScroll 
         dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
           loader={<Spinner/>} 
         > 
         <div className="container"> 
        <div className="row">
        {/* !this.state.loading && */}
          {this.state.articles.map((element) => {
               return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}
               newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}
         </div>
          </div>  
         </InfiniteScroll>
      
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleOnPrev}> &larr; Previous</button>
          <button disabled={this.state.page + 1} type="button" className="btn btn-dark" onClick={this.handleOnNext}>  Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
