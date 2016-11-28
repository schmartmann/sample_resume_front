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

class Skills extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div>
        <h4>
          Skills
        </h4>
        <ul>
          <li>
            {this.props.resume.user_skills[0]}
          </li>
          <li>
            {this.props.resume.user_skills[1]}{this.props.resume.user_skills[2]}
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Skills)
