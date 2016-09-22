import React from 'react';
import { View } from 'react-native';
import Dimensions from 'Dimensions';

class ProgressBar extends React.Component {

  setWidth(width) {
    return {
      marginTop: 25,
      height: 5,
      width: width,
      backgroundColor: '#0FA0EA',
    }
  }

  render() {
    const stage = this.props.stage;
    const width = Dimensions.get('window').width;
    let progressWidth = 0;
    if (stage !== 0) {
      progressWidth = width / 8 * stage;
    }

    return (
      <View style={this.setWidth(progressWidth)}/>
    );
  }
}

export default ProgressBar;
