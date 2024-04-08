
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;
 // apiKey = process.env.REACT_APP_NEWS_API
  apiKey = "a8f14ff5a87b4ac6ab02636f9dd656ad"
  state={
    progress:0
  }
  setProgress=(progress)=>{
   this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route exact path="/buisness"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='buisness' pageSize={this.pageSize} country="in" category="business"/>}/>
        <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        <Route exact path="/health"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health"/>}/>
        <Route exact path="/science"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category="science"/>}/>
        <Route exact path="/sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports"/>}/>
        <Route exact path="/technology"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category="technology"/>}/>
        {/* <Route exact path="/about"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='about' pageSize={this.pageSize} country="in" category="general"/>}/> */}
        </Routes>
        {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/> */}
        {/* <Switch>
          <Route path="/"> <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route path="/buisness"> <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="buisness"/>
           
          </Route>
          
        </Switch> */}
       </Router>
      </div>
    )
  }
}

