import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ToMonetaryStr } from '../../../helpers/currency';

import Card from './Card';

class TransactionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const icon = require('../../../../assets/transIconTemp.png');

    const business = this.props.business;
    const expense = this.props.expense;
    const date = this.props.date;

    const genTransactionCard = () => (
      <View style={s.container}>
        <View style={s.iconWrapper}>
          <Image
            source={icon}
            style={s.transactionIcon}
          />
        </View>
        <View style={s.dataWrapper}>
          <View style={s.top}>
            <View style={s.left}>
              <Text style={s.business}>{business}</Text>
            </View>
            <View style={s.right}>
              <Text style={s.expense}>-{expense}</Text>
            </View>
          </View>
          <View>
            <Text style={s.date}>{date}</Text>
          </View>
        </View>
      </View>
    );

    return (
      <Card
        backgroundColor={'white'}
        borderRadius={5}
        marginBottom={16}
      >
        {genTransactionCard()}
      </Card>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconWrapper: {
    flex: 0.5,
  },
  transactionIcon: {
    width: 32,
    height: 32,
  },
  dataWrapper: {
    flex: 3,
  },
  top: {
    flexDirection: 'row',
  },
  date: {
    fontFamily: 'Avenir-Medium',
    color: '#737373',
    fontSize: 12,
  },
  business: {
    fontFamily: 'Avenir-Medium',
    color: '#37474F',
  },
  expense: {
    fontFamily: 'Avenir-Heavy',
    color: '#37474F',
    textAlign: 'right',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
});

TransactionCard.propTypes = {
  business: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  expense: React.PropTypes.string.isRequired,
};

export default TransactionCard;
