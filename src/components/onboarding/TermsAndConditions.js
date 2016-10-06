import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import AdvanceButton from '../../containers/partials/AdvanceButton';
import BaseView from '../main/BaseView';

class OnboardTermsAndConditions extends React.Component {
  render() {

    const genTermsAndConditions = () => (
      <View style={s.container}>
        <Text style={s.termsText}>It is not money that renders commodities commensurable. Just the contrary. It is because all commodities, as values, are realised human labour, and therefore commensurable, that their values can be measured by one and the same special commodity, and the latter be converted into the common measure of their values, i.e., into money. Money as a measure of value, is the phenomenal form that must of necessity be assumed by that measure of value which is imminent in commodities, labour-time. {'\n'} {'\n'}

        Paper money is a token representing gold or money. The relation between it and the values of commodities is this, that the latter are ideally expressed in the same quantities of gold that are symbolically represented by the paper. Only in so far as paper money represents gold, which like all other commodities has value, is it a symbol of value. {'\n'} {'\n'}

        It is not money that renders commodities commensurable. Just the contrary. It is because all commodities, as values, are realised human labour, and therefore commensurable, that their values can be measured by one and the same special commodity, and the latter be converted into the common measure of their values, i.e., into money. Money as a measure of value, is the phenomenal form that must of necessity be assumed by that measure of value which is imminent in commodities, labour-time. {'\n'} {'\n'}

        Paper money is a token representing gold or money. The relation between it and the values of commodities is this, that the latter are ideally expressed in the same quantities of gold that are symbolically represented by the paper. {'\n'} {'\n'}

        It is not money that renders commodities commensurable. Just the contrary. It is because all commodities, as values, are realised human labour, and therefore commensurable, that their values can be measured by one and the same special commodity, and the latter be converted into the common measure of their values, i.e., into money. Money as a measure of value, is the phenomenal form that must of necessity be assumed by that measure of value which is imminent in commodities, labour-time. {'\n'} {'\n'}

        Paper money is a token representing gold or money. The relation between it and the values of commodities is this, that the latter are ideally expressed in the same quantities of gold that are symbolically represented by the paper.
        </Text>
      </View>
    );

    return (
      <View style={s.page}>
        <BaseView
          parent={'Terms & Conditions'}
          title={'Terms & Conditions'}
          children={genTermsAndConditions()}
          leftIcon={{ type: 'backBlue', action: Actions.pop }}
          scroll
          hideBottomNavBar
        />
        <AdvanceButton
          text={'Accept'}
          pressAction={Actions.overview}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginRight: 14,
    marginLeft: 14,
    marginTop: 16,
    marginBottom: 16,
  },
  termsText: {
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 10
  },
});

export default OnboardTermsAndConditions;
