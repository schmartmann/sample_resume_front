import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResume } from '../actions/index';
import thunk from 'redux-thunk';

import WorkHistory from "./work_history"
import Education from "./education"
import Skills from "./skills"
import Contact from "./contact"
import Title from "./title"
import Objective from "./objective"
import Logo from "./logo"
import Footer from "./footer"

function mapStateToProps(state){
  return {
    resume: state.resume
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchResume: fetchResume,
  }, dispatch)
}



class App extends Component {
  constructor(props){
    super(props);
  };
  componentWillMount(){
    this.props.fetchResume();
  };
  render() {
    return (
      <div>
        <div className="logo">
          <Logo/>
        </div>
        <div className="jumbotron">
            <div className="title">
              <Title/>
            </div>
            <div className="objective lead">
              <Objective/>
            </div>
            <div className="skills lead">
              <Skills/>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="work-history">
              <WorkHistory/>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="education">
              <Education/>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact">
              <Contact/>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
