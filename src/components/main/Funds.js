import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SectionHeader from '../partials/layout/SectionHeader';
import FundsCard from '../partials/cards/FundsCard';
import BaseView from './BaseView';

class Funds extends React.Component {

  constructor(props) {
    super(props);
    this.handleFundPreview = this.handleFundPreview.bind(this);
  }

  handleFundPreview(fundPreviewName, canModify) {
    this.props.setFundPreviewName(fundPreviewName);
    Actions.fundPreview({canModify});
  }

  render() {
    const genFunds = () => (
      <View>
        <SectionHeader
          header={'Summary'}
        />
        <TouchableHighlight
          underlayColor={'white'}
          onPress={() => this.handleFundPreview('General Savings', true)}
        >
          <View>
            <FundsCard
              category={'General Savings'}
              timeToReset={'5 days until reset'}
              current={'$1,420'}
              goal={2000}
              barColor={'#ED417B'}
              divider
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'white'}
          onPress={() => this.handleFundPreview('Recurring Expenses', false)}
        >
          <View>
            <FundsCard
              category={'Recurring Expenses'}
              timeToReset={'3 days until paycheck'}
              current={'$920'}
              goal={1200}
              barColor={'#9C27B0'}
              divider
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'white'}
          onPress={() => this.handleFundPreview('General Spending', true)}
        >
          <View>
            <FundsCard
              category={'General Spending'}
              timeToReset={'12 days until reset'}
              current={'$265'}
              goal={400}
              barColor={'#F44336'}
              canModify
            />
          </View>
        </TouchableHighlight>
        <SectionHeader
          header={'Custom Funds'}
        />
      </View>
    );

    return (
      <BaseView
        parent={'Funds'}
        title={'Funds'}
        rightIcon={{ type: 'add', action: Actions.funds }}
        children={genFunds()}
        scroll
      />
    );
  }
}

const s = StyleSheet.create({
  scrollContainer: {
    marginTop: 15,
  },
  page: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  pageHeader: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFC',
  },
  pageHeaderText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9F4',
  },
});

export default Funds;
