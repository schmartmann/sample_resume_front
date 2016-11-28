import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResume } from '../actions/index';
import thunk from 'redux-thunk';



function mapStateToProps(state){
  return {
    resume: state.resume
  }
}

class Title extends Component {
  constructor(props){
    super(props)
  };
  render(){
    return(
      <div clasName = "row">
        <div className="col-lg-6">
          <h1>
            {this.props.resume.user_name}
          </h1>
        </div>
        <div className="col-lg-6">
          <img src="https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg"/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Title)
