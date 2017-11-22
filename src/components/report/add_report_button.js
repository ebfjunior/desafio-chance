import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {openReportPanel} from '../../actions/app_action';

class AddReportButton extends Component{
  constructor(props){
    super(props);
  }
  onButtonClick(){
    this.props.openReportPanel();
  }
  render(){
    return (<button type="button" className="btn btn-primary" onClick={this.onButtonClick.bind(this)}>ADD REPORT</button>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openReportPanel }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddReportButton);
