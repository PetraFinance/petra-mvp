import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';

import ViewHeader from './ViewHeader';

class CustomWebView extends React.Component {
  constructor(props) {
    super(props);
    this.onBridgeMessage = this.onBridgeMessage.bind(this);
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  onBridgeMessage(data) {
    if (data) {
      Actions.pop();
      StatusBar.setBarStyle('default', true);
      data = JSON.parse(data);
      async function getAccountData() {
        try {
          let response = await
          fetch('url', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'token': data.token,
            })
          });
          let accountData = await response.json();
        } catch(error) {

        }
      };
    }
  }

  render() {
    const injectScript =
    `(function () {
      function sendData(data) {
        var payload = JSON.stringify(data);
        WebViewBridge.send(payload);
      };
      function checkData() {
        if (window.petra_status == 'success') {
          sendData({
            'token': window.petra_public_token,
            'status': window.petra_status,
            'metadata': window.petra_metadata,
          });
        } else {
          setTimeout(checkData, 1000);
        }
      };
      setTimeout(checkData, 1000);
    }());`;

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
          onBridgeMessage={this.onBridgeMessage}
          injectedJavaScript={injectScript}
          source={{ uri: "https://set8jyaswh.execute-api.us-east-1.amazonaws.com/dev/connections/plaid_link" }}
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
