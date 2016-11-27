import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';

import ViewHeader from '../layout/ViewHeader';

class AddAccount extends React.Component {
  constructor(props) {
    super(props);
    this.onBridgeMessage = this.onBridgeMessage.bind(this);
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  onBridgeMessage(data) {
    async function getBankData(public_token) {
      try {
        let formData;
        let response;

        formData = new FormData();
        formData.append('public_token', 'test,bofa,connected');
        response = await
        fetch('https://dev.trypetra.com/fakedata/connections/new', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: formData,
        });
        const auth_data = await response.json();
        const auth_token = auth_data.data.auth_token;

        formData = new FormData();
        formData.append('auth_token', 'test_bofa');
        response = await
        fetch('https://dev.trypetra.com/fakedata/connections/data', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: formData,
        });
        const accountData = await response.json();
        return [accountData, auth_token];
      } catch(error) {
        Alert.alert(error);
      }
    };

    if (data) {
      Actions.pop();
      StatusBar.setBarStyle('default', true);
      const response = JSON.parse(data);
      const public_token = response["token"];
      getBankData(public_token).then(data => {
        this.props.handleAccountData(data[0]);
        this.props.handleAuthToken(data[1]);
      });
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

    const handleBack = () => {
      Actions.pop();
      StatusBar.setBarStyle('default', true);
    };

    return (
      <View style={s.container}>
        <ViewHeader
          title={'Add an Account'}
          leftIcon={{ type: "exitWhite", action: handleBack }}
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

AddAccount.propTypes = ({
  handleAccountData: React.PropTypes.func.isRequired,
  handleAuthToken: React.PropTypes.func.isRequired,
});

export default AddAccount;
