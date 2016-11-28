import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResume } from '../actions/index';
import thunk from 'redux-thunk';



export default class Logo extends Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation" className="active">
              <a href="#">Home</a>
            </li>
            <li role="presentation">
              <a href="#">About</a>
            </li>
            <li role="presentation">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3>
          thr<span id="special-s">o</span>nged
        </h3>
        <hr/>
      </div>
    )
  }
}
