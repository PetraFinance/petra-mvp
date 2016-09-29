import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/partials/AdvanceButton';
import Swiper from 'react-native-swiper';

class ProfileOverview extends React.Component {

  constructor(props) {
    super(props);
    this.handleFinishOnboarding = this.handleFinishOnboarding.bind(this);
  }

  handleFinishOnboarding() {
    this.props.handleFinishOnboarding();
    Actions.overview();
  }

  render() {
    return (
      <View style={s.page}>
        <View style={s.container}>
          <Swiper
            bounces={true}
            loop={false}
            height={500}
            activeDot={
              <View style={{backgroundColor: '#03A9F4', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
            }
          >
            <View style={s.slideView}>
              <Text style={s.slideHeader}>Budgets</Text>
            </View>
            <View style={s.slideView}>
              <Text style={s.slideHeader}>Goals</Text>
            </View>
            <View style={s.slideView}>
              <Text style={s.slideHeader}>Investments</Text>
            </View>
          </Swiper>
        </View>
        <View style={s.advanceWrapper}>
          <AdvanceButton
            text={"LET'S GO!"}
            pressAction={() => this.handleFinishOnboarding()}
          />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  advanceWrapper: {
    flex: 0.25,
    justifyContent: 'flex-end',
  },
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
});

ProfileOverview.PropTypes = {

}

export default ProfileOverview;
