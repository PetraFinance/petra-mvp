import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './BaseCard';

class TipCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const genTipCard = () => (
      <View>
        <Text style={s.tip}>{this.props.tipText}</Text>
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
  tipPanel: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#03A9F4',
    borderWidth: 2,
    borderRadius: 5,
  },
  tip: {
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
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
  },
  leftText: {
    flex: 0.5,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TipCard;
