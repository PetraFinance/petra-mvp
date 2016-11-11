import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ToMonetaryStr } from '../../../helpers/currency';

import Card from './Card';

class OverviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bank = this.props.bank;
    const balance = ToMonetaryStr(this.props.balance);
    const type = this.props.type;

    const genPage = () => (
      <View style={s.overviewCard}>
        <View style={s.top}>
          <Text style={s.bank}>{bank}</Text>
          <Text style={s.balance}>{balance}</Text>
        </View>
        <View style={s.bottom}>
          <Text style={s.desc}>{type}</Text>
        </View>
      </View>
    );

    return (
      <Card
        backgroundColor={this.props.backgroundColor}
        borderRadius={5}
      >
        {genPage()}
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
