import React from 'react';
import { Stylesheet, Text, View } from 'react-native';

import MainView from './MainView';

class Goals extends React.Component {
  render() {

    const genGoals = () => {
      return (
        <Text>Memes</Text>
      );
    }

    return (
      <MainView
        title="Goals"
      >
        {genGoals()}
      </MainView>
    );
  }
}

export default Goals
