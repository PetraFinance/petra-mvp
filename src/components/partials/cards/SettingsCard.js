import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertNumberstoDollars, convertDollarstoNumbers } from '../../../helpers/currency';

import Card from './Card';

class SettingsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const genPage = () => {
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
        {genPage()}
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
