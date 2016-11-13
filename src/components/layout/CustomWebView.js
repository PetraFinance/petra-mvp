import React from 'react';
import Navigation from './Navigation';
import ViewHeader from './ViewHeader';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';

class CustomWebView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    StatusBar.setBarStyle('light-content', true);
    let chartData = { data: 'memes' };
    setTimeout(() => {
      const { bridge } = this.refs;
      bridge.sendToBridge(JSON.stringify(chartData));
    }, 2000);
  }

  render() {
    const injectScript = "(function () { if (WebViewBridge) { WebViewBridge.onMessage = function (message) { WebViewBridge.send(message); }; } }());";

    const onBridgeMessage = (message) => {
      if (message) {
        Alert.alert(message);
      }
    }

    return (
      <View style={s.container}>
        <ViewHeader
          title={this.props.title}
          leftIcon={this.props.leftIcon}
          backgroundColor="#29B6F6"
          textColor="white"
        />
        <WebViewBridge
          ref="bridge"
          onBridgeMessage={onBridgeMessage}
          injectedJavaScript={injectScript}
          source={{ uri: "https://bsmarimon.github.io/WebViewBridge/" }}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
});

CustomWebView.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
  leftIcon: React.PropTypes.object,
  rightIcon: React.PropTypes.object,
}

export default CustomWebView;
