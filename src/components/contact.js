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
    this.state = {
      revealContact: false
    }
    this.revealContact = this.revealContact.bind(this);
    this.hideContact = this.hideContact.bind(this);
  };
  revealContact(){
    this.setState({revealContact: true})
  };
  hideContact(){
    this.setState({revealContact: false})
  };
  render(){
    return(
      <div className="card">
        <h4 onClick={this.state.revealContact? this.hideContact : this.revealContact}>
          Contact Information
        </h4>
        <ul className={this.state.revealContact? "" : "contact-hide"}>
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
