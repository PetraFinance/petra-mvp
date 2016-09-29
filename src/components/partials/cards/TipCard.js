import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './BaseCard';

class TipCard extends React.Component {

  constructor(props) {
    super(props);
  }

  genTipCard() {
    return (
      <View>
        <Text style={s.tip}>{this.props.tipText}</Text>
        <View style={s.tipTakeAction}>
          <Text style={s.leftText}>{this.props.leftText}</Text>
          <Text style={s.rightText}>{this.props.rightText}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Card
        borderColor={'#03A9F4'}
        backgroundColor={'white'}
        children={this.genTipCard()}
      />
    );
  }
}

const s = StyleSheet.create({
  tipPanel: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#03A9F4',
    borderWidth: 2,
    borderRadius: 5,
  },
  tip: {
    fontFamily: 'Avenir',
    marginBottom: 10,
  },
  tipTakeAction: {
    flex: 1,
    flexDirection: 'row',
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  leftText: {
    flex: 0.5,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
});

export default TipCard;
