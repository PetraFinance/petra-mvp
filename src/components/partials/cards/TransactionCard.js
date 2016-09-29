import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './BaseCard';

class TransactionCard extends React.Component {

  constructor(props) {
    super(props);
  }

  genTransactionCard() {
    const transactions = [
      {
        "expense": "Starbucks",
        "cost": "$14.99"
      },
      {
        "expense": "Starbucks",
        "cost": "$14.99"
      },
    ]

    const numTransactions = transactions.length;

    let rows = transactions.map((entry, i) => (
      <View
        style={s.expenseEntry}
        key={i}
      >
        <Text style={s.expenseDesc}>{entry.expense}</Text>
        <Text style={s.expenseCost}>{entry.cost}</Text>
      </View>
    ));

    rows.unshift(<Text key={numTransactions + 1} style={s.spendingHeader}>{this.props.category}</Text>);

    return rows;
  }

  render() {
    return (
      <Card
        borderColor={'#03A9F4'}
        backgroundColor={'white'}
        children={this.genTransactionCard()}
        marginBottom={this.props.marginBottom}
      />
    );
  }
}

const s = StyleSheet.create({
  expenseEntry: {
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
  spendingHeader: {
    marginBottom: 10,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
});

export default TransactionCard;
