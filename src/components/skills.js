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
    this.state = {
      revealSkills: false
    }
    this.revealSkills = this.revealSkills.bind(this);
    this.hideSkills = this.hideSkills.bind(this);
  };
  revealSkills(){
    this.setState({revealSkills: true})
  };
  hideSkills(){
    this.setState({revealSkills: false})
  };
  render(){
    return(
      <div>
        <h4 onClick={this.state.revealSkills? this.hideSkills: this.revealSkills}>
          Skills
        </h4>
        <ul className={this.state.revealSkills? "" : "skills-hide"}>
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
