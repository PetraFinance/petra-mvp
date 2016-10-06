import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SectionHeader from '../partials/layout/SectionHeader';
import FundsCard from '../partials/cards/FundsCard';
import BottomButton from '../partials/buttons/BottomButton';
import BaseView from './BaseView';

class FundDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const canModify = () => {
      if (this.props.canModify) {
        return (
          <BottomButton
            text={"ADJUST FUNDS"}
            pressAction={Actions.fundAdjust}
          />
        );
      }
      return (
        <View />
      );
    };

    const genFunds = () => (
      <View>
        <SectionHeader
          header={'Overview'}
        />
        <FundsCard
          category={'Funds'}
          timeToReset={'5 days until reset'}
          current={'$1,420'}
          goal={2000}
          barColor={'#ED417B'}
          loadFunds={'routing function here'}
          showSpent
        />
        <SectionHeader
          header={'October 2016'}
        />
      </View>
    );

    return (
      <View style={s.container}>
        <View style={s.container}>
          <BaseView
            parent={'Funds'}
            title={this.props.fundPreviewName}
            hideBottomNavBar
            headerBackgroundColor={'#455A64'}
            headerTextColor={'white'}
            leftIcon={{ type: 'exit', action: Actions.pop }}
            children={genFunds()}
          />
        </View>
        {canModify()}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

FundDetails.propTypes = {
  fundPreviewName: React.PropTypes.string.isRequired,
};

export default FundDetails;
