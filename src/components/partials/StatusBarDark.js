import React from 'react';
import { View, StatusBar } from 'react-native';

class StatusBarLight extends React.Component {

  render() {

    StatusBar.setBarStyle('default', true);

    return (
      <View></View>
    );
  }
}

export default StatusBarLight;
