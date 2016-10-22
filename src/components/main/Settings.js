import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MainView from './MainView';
import Header from '../partials/layout/Header';
import SettingsCard from '../partials/cards/SettingsCard';

class Settings extends React.Component {

  render() {
    const genPage = () => (
      <View>
        <Header
          text="User"
        />
        <SettingsCard>
          <Text style={s.text}>David Bui</Text>
        </SettingsCard>
        <Header
          text="Account"
        />
        <SettingsCard>
          <Text style={s.logout}>Logout</Text>
        </SettingsCard>
      </View>
    );

    return (
      <MainView
        title="Settings"
      >
        {genPage()}
      </MainView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Avenir',
  },
  logout: {
    fontFamily: 'Avenir',
    color: '#03A9F4',
  },
});

export default Settings;
