import React from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SubView from '../layout/SubView';
import SectionHeader from '../layout/SectionHeader';
import TransactionCard from '../modules/cards/TransactionCard';

class TransactionList extends React.Component {

  render() {

    const genPage = () => (
      <ScrollView style={s.container}>
        <SectionHeader
          text={"Transactions"}
        />
        <TransactionCard
          business={'Starbucks'}
          expense={'$4.20'}
          date={'Sun, Sep 25 2016'}
        />
        <TransactionCard
          business={'Starbucks'}
          expense={'$4.20'}
          date={'Sun, Sep 25 2016'}
        />
        <TransactionCard
          business={'Starbucks'}
          expense={'$4.20'}
          date={'Sun, Sep 25 2016'}
        />
        <TransactionCard
          business={'Starbucks'}
          expense={'$4.20'}
          date={'Sun, Sep 25 2016'}
        />
        <TransactionCard
          business={'Starbucks'}
          expense={'$4.20'}
          date={'Sun, Sep 25 2016'}
        />
        <TransactionCard
          business={'Starbucks'}
          expense={'$4.20'}
          date={'Sun, Sep 25 2016'}
        />
      </ScrollView>
    );

    const handleBack = () => {
      Actions.pop();
      StatusBar.setBarStyle('default', true);
    };

    return (
      <SubView
        title={this.props.bankName}
        leftIcon={{type: 'exitWhite', action: handleBack}}
        headerColor={this.props.bankColor}
        backgroundColor={'#F6F8F9'}
      >
        {genPage()}
      </SubView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 14,
    paddingRight: 14,
  },
});

TransactionList.propTypes = ({

});

export default TransactionList;
