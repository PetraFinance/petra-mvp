import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';

import Navigation from './Navigation';
import BaseView from './BaseView';

class Learn extends React.Component {

  render() {

    const genLearn = () => (
      <View style={s.wrapper}>
        <WebView
           source={{uri: 'https://github.com/facebook/react-native'}}
           style={s.webView}
        />
      </View>
    );

    return (
      <BaseView
        parent={'Learn'}
        title={'Learn'}
        children={genLearn()}
      />
    );
  }
}

const s = StyleSheet.create({
  webView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default Learn;
