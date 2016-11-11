import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MainView from '../layout/MainView';
import SectionHeader from '../layout/SectionHeader';
import SettingsCard from '../modules/cards/SettingsCard';

class Settings extends React.Component {

  render() {
    const genPage = () => (
      <View>
        <View style={s.paddingLeft}>
          <SectionHeader
            text="User"
          />
        </View>
        <SettingsCard>
          <Text style={s.text}>David Bui</Text>
        </SettingsCard>
        <View style={s.paddingLeft}>
          <SectionHeader
            text="Account"
          />
        </View>
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
  paddingLeft: {
    paddingLeft: 14,
  },
  logout: {
    fontFamily: 'Avenir',
    color: '#03A9F4',
  },
});

export default Settings;
