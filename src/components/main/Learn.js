import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Swiper from 'react-native-swiper';
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
        parent={this.props.parent}
        title={this.props.title}
        children={genLearn()}
        scroll={false}
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
