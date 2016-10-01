import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import Navigation from './Navigation';
import BaseView from './BaseView';
import TipCard from '../partials/cards/TipCard';
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
        <View style={s.overviewPanel}>
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
        parent={this.props.parent}
        title={this.props.title}
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
    flexDirection: 'column',
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
  overviewPanel: {
    height: 150,
    marginTop: 16,
    marginRight: 14,
    marginLeft: 14,
    marginBottom: 16,
    backgroundColor: '#03A9F4',
  },
});

Transactions.PropTypes = {
  parent: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Transactions;
