import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import CustomWebView from '../layout/CustomWebView';

class AccountAdd extends React.Component {

  render() {
    const handleBack = () => {
      Actions.pop();
      StatusBar.setBarStyle('default', true);
    };

    const genPage = () => (
      <View />
    );

    return (
      <CustomWebView
        title={'Add an Account'}
        leftIcon={{ type: "exitWhite", action: handleBack }}
      >
        {genPage()}
      </CustomWebView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 14,
    paddingRight: 14,
  },
});

export default AccountAdd;
