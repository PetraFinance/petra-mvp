import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Card from './Card';

class OverviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bank = this.props.bank;
    const balance = this.props.balance;
    const type = this.props.type;

    const genOverviewCard = () => (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={s.overviewCard}
        underlayColor={this.props.backgroundColor}
      >
        <View>
          <View style={s.top}>
            <Text style={s.bank}>{bank}</Text>
            <Text style={s.balance}>{balance}</Text>
          </View>
          <View style={s.bottom}>
            <Text style={s.desc}>{type}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );

    return (
      <Card
        backgroundColor={this.props.backgroundColor}
        borderRadius={5}
      >
        {genOverviewCard()}
      </Card>
    );
  }
}

const s = StyleSheet.create({
  overviewCard: {
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
  },
  bank: {
    flex: 1,
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
  balance: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
  desc: {
    fontFamily: 'Avenir',
    color: 'white',
  },
});

OverviewCard.propTypes = {

};

export default OverviewCard;
