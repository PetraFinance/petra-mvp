import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/partials/AdvanceButton';
import Swiper from 'react-native-swiper';

class Landing extends React.Component {

  render() {
    const banner = require('../../../assets/logo.png');

    return (
      <View style={s.page}>
        <Swiper
          bounces={true}
          loop={false}
          height={575}
          activeDot={
            <View style={{backgroundColor: '#03A9F4', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
          }
        >
          <View style={s.slideView}>
            <View style={s.banner}>
              <Image
                source={ banner }
                style={s.bannerImage}
               />
            </View>
            <View style={s.intro}>
              <Text style={s.welcome}>
                Welcome to Petra!
              </Text>
              <Text style={s.desc}>
                We’ll help you do memes and other financially sound things really easily et cetera et cetera. Dont you love memes like this?
              </Text>
            </View>
          </View>
          <View style={s.slideView}>
            <Text style={s.slideHeader}>More</Text>
          </View>
          <View style={s.slideView}>
            <Text style={s.slideHeader}>Information</Text>
          </View>
          <View style={s.slideView}>
            <Text style={s.slideHeader}>Woo, pretty cool!</Text>
          </View>
        </Swiper>
        <View style={s.advanceWrapper}>
          <AdvanceButton
            text={'CONTINUE'}
            pressAction={Actions.accountCreation}
          />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  slideView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideHeader: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9F4',
  },
  advanceWrapper: {
    flex: 0.25,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  banner: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    height: 300,
    width: 300,
  },
  intro: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9F4',
  },
  desc: {
    marginTop: 20,
    marginRight: 45,
    marginLeft: 45,
    fontFamily: 'Avenir',
    textAlign: 'center',
  }
});

export default Landing;
