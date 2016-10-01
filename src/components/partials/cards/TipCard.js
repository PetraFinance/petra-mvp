import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from './Card';

class TipCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const genTipCard = () => (
      <View>
        <Text style={s.tipText}>{this.props.tipText}</Text>
        <View style={s.tipTakeAction}>
          <Text style={s.leftText}>{this.props.leftText}</Text>
          <Text style={s.rightText}>{this.props.rightText}</Text>
        </View>
      </View>
    );

    return (
      <Card
        borderColor={'#455A64'}
        backgroundColor={'#455A64'}
        children={genTipCard()}
      />
    );
  }
}

const s = StyleSheet.create({
  tipText: {
    fontFamily: 'Avenir',
    color: 'white',
    marginBottom: 10,
  },
  tipTakeAction: {
    flex: 1,
    flexDirection: 'row',
  },
  rightText: {
    flex: 1,
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
  leftText: {
    flex: 0.5,
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
});

export default TipCard;
