import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MainView from '../layout/MainView';
import SectionHeader from '../layout/SectionHeader';

class Overview extends React.Component {

  render() {
    const genPage = () => (
      <View>
        <SectionHeader
          text={'Bank Accounts'}
        />
        <View style={s.container}>
        </View>
        <SectionHeader
          text={'Credit Cards'}
        />
        <View style={s.container}>
        </View>
      </View>
    );

    return (
      <MainView
        title={'Overview'}
      >
        {genPage()}
      </MainView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default Overview;
