import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

class TransactionCard extends React.Component {

  constructor(props) {
    super(props);
  }

  genTransactionCard() {
    const transactions = [
      {
        "expense": "Equator Coffee & Tea",
        "cost": "$4.00"
      },
      {
        "expense": "Walgreens",
        "cost": "$17.63"
      },
    ]

    const numTransactions = transactions.length;

    let rows = transactions.map((entry, i) => (
      <View
        style={s.section}
        key={i}
      >
        <Text style={s.expenseDesc}>{entry.expense}</Text>
        <Text style={s.expenseCost}>{entry.cost}</Text>
      </View>
    ));

    rows.unshift(<Text key={numTransactions + 1} style={s.sectionHeader}>{this.props.category}</Text>);
    return rows;
  }

  render() {
    return (
      <Card
        borderColor={'#CCD0D3'}
        backgroundColor={'white'}
        children={this.genTransactionCard()}
        marginBottom={this.props.marginBottom}
      />
    );
  }
}

const s = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  expenseCost: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Avenir',
  },
  expenseDesc: {
    fontFamily: 'Avenir',
  },
  sectionHeader: {
    marginBottom: 10,
    fontFamily: 'Avenir-Heavy',
    fontSize: 12,
  },
});

TransactionCard.PropTypes = {
  category: React.PropTypes.string.isRequired,
};

export default TransactionCard;
