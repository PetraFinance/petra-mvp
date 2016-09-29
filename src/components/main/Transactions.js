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
      marginRight: 15,
      marginLeft: 15,
    };
  }

  setSwiperWidth() {
    let width = Dimensions.get('window').width;
    width = width - 30;
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
          activeDot={
            <View style={{backgroundColor: '#03A9F4', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
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
        title={this.props.title}
        children={genTransactions()}
      />
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
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
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 12,
  },
  overviewPanel: {
    height: 150,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: '#03A9F4',
    borderRadius: 5,
  },
});

export default Transactions;
