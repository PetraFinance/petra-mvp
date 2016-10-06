import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import Navigation from './Navigation';
import BaseView from './BaseView';
import TipCard from '../partials/cards/TipCard';
import FundsCard from '../partials/cards/FundsCard';
import TransactionCard from '../partials/cards/TransactionCard';

class Transactions extends React.Component {

  setSwipeViewWidth() {
    let width = Dimensions.get('window').width;
    width = width - 30;
    return {
      width,
      marginRight: 14,
      marginLeft: 14,
    };
  }

  setSwiperWidth() {
    let width = Dimensions.get('window').width;
    width = width - 28;
    return width;
  }
  render() {

    const genTransactions = () => (
      <View>
        <View style={s.fundsContainer}>
          <FundsCard
            category={'General Savings'}
            timeToReset={'5 days until reset'}
            current={'$1,420'}
            goal={2000}
            barColor={'#ED417B'}
            barSize={this.setSwipeViewWidth()}
            divider
          />
          <FundsCard
            category={'Recurring Expenses'}
            timeToReset={'3 days until paycheck'}
            current={'$920'}
            goal={1200}
            barColor={'#9C27B0'}
            divider
          />
          <FundsCard
            category={'General Spending'}
            timeToReset={'12 days until reset'}
            current={'$265'}
            goal={400}
            barColor={'#F44336'}
            canModify
          />
        </View>
        <Swiper
          bounces={true}
          loop={false}
          height={160}
          dot={
            <View style={{backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: -5,}} />
          }
          activeDot={
            <View style={{backgroundColor: '#03A9F4', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: -5,}} />
          }
        >
          <View style={this.setSwipeViewWidth()}>
            <TipCard
              tipText={'Oh this has gotta be the good life, oh this has gotta be the good life, feels like this city is on fire tonight, oh this has gotta be the good life'}
              leftText={'Learn More'}
              rightText={'Adjust Funds'}
            />
          </View>
          <View style={this.setSwipeViewWidth()}>
            <TipCard
              tipText={'Oh this has gotta be the good life, oh this has gotta be the good life, feels like this city is on fire tonight, oh this has gotta be the good life'}
              leftText={'Learn More'}
              rightText={'Adjust Funds'}
            />
          </View>
          <View style={this.setSwipeViewWidth()}>
            <TipCard
              tipText={'Oh this has gotta be the good life, oh this has gotta be the good life, feels like this city is on fire tonight, oh this has gotta be the good life'}
              leftText={'Learn More'}
              rightText={'Adjust Funds'}
            />
          </View>
        </Swiper>

        <View style={s.container}>
          <View style={s.dateEntry}>
            <View style={s.dateDecoration}></View>
            <Text style={s.date}>TODAY, SEP 19TH</Text>
            <View style={s.transHistory}>
              <TransactionCard
                category={'GENERAL SPENDING'}
                marginBottom={30}
              />
              <TransactionCard
                category={'RECURRING SPENDING'}
                marginBottom={30}
              />
              <View style={s.timeline}></View>
            </View>
          </View>
        </View>
      </View>
    )

    return (
      <BaseView
        parent={'Transactions'}
        title={'Transactions'}
        children={genTransactions()}
        scroll={true}
      />
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 14,
    marginLeft: 14,
  },
  fundsContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  general: {
    alignSelf: 'stretch',
    marginBottom: 30,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#03A9F4',
    borderWidth: 2,
    borderRadius: 5,
  },
  dateEntry: {
    flex: 1,
    alignItems: 'center',
  },
  timeline: {
    position: 'absolute',
    zIndex: -1,
    height: 200,
    width: 3,
    backgroundColor: '#03A9F4',
    left: 15,
    top: 0,
  },
  transHistory: {
    alignSelf: 'stretch',
  },
  dateDecoration: {
    width: 100,
    height: 3,
    marginBottom: 5,
    backgroundColor: '#03A9F4',
  },
  date: {
    marginBottom: 10,
    fontFamily: 'Avenir-Heavy',
    fontSize: 12,
  },
});


export default Transactions;
