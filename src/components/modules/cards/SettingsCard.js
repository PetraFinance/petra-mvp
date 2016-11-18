import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Card from './Card';

class SettingsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const genSettingsCard = () => {
      return (
        <View style={s.container}>
          {this.props.children}
        </View>
      );
    };

    return (
      <Card
        borderColor="#CCD0D3"
      >
        {genSettingsCard()}
      </Card>
    );
  }
}

const s = StyleSheet.create({
  container: {
    height: 15,
    borderBottomWidth: 1,
  },
});

SettingsCard.propTypes = {

};

export default SettingsCard;
