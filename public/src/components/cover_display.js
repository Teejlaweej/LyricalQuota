import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoverDisplay extends Component {


  render() {
    if (!this.props.cover){
      return null;
    }
    return (
      <div className="cover">
        <img className="image" src={this.props.cover}></img>
      </div>
    );
  }
}

function mapStateToProps ({cover}) {
  return {cover};
}

export default connect (mapStateToProps)(CoverDisplay);
