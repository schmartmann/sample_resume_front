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

class Education extends Component {
  constructor(props){
    super(props);
    this.state = {
      revealEducation: false
    }
    this.revealEducation = this.revealEducation.bind(this);
    this.hideEducation = this.hideEducation.bind(this);
  };
  revealEducation(){
    this.setState({revealEducation: true})
  };
  hideEducation(){
    this.setState({revealEducation: false})
  };
  render(){
    return(
      <div className="card">
        <h4 onClick={this.state.revealEducation? this.hideEducation : this.revealEducation}>
          Education
        </h4>
        <ul className={this.state.revealEducation? "" : "education-hide"}>
          <li>
            {this.props.resume.education[0]}
          </li>
          <li>
            {this.props.resume.education[1]}
          </li>
          <li>
            {this.props.resume.education[2]}
          </li>
          <li>
            {this.props.resume.education[3]}
          </li>
          <li>
            {this.props.resume.education[4]}
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Education)
