import React from 'react';
import { View, StatusBar } from 'react-native';

class StatusBarLight extends React.Component {

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View />
    );
  }
}

export default StatusBarLight;
