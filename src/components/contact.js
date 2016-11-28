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

class Contact extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div>
        <h4>
          Contact Information
        </h4>
        <ul>
          <li>
            Name: {this.props.resume.user_name}
          </li>
          <li>
            Phone: {this.props.resume.user_phone}
          </li>
          <li>
            Email: {this.props.resume.user_email}
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Contact)
