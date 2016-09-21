import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Dimensions from 'Dimensions';

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
  }

  setWidth(width) {
    return {
      marginTop: 20,
      height: 5,
      width: width,
      backgroundColor: '#0FA0EA'
    }
  }

  render() {
    const stage = this.props.stage;
    const width = Dimensions.get('window').width;
    let progressWidth = 0;
    if (stage != 0) {
      progressWidth = width / 8 * stage;
    }

    return (
      <View style={ this.setWidth( progressWidth ) }></View>
    );
  }
}

export default ProgressBar;
