import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton'

class OnboardTermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.page}>
        <View style={s.container}>

          <View style={s.intro}>
            <Text style={s.welcome}>Terms &amp; Conditions</Text>
            <Text style={s.desc}>aesthetically appealing one-liner</Text>
          </View>

          <ScrollView style={s.terms}>
            <Text style={s.termsText}>It is not money that renders commodities commensurable. Just the contrary. It is because all commodities, as values, are realised human labour, and therefore commensurable, that their values can be measured by one and the same special commodity, and the latter be converted into the common measure of their values, i.e., into money. Money as a measure of value, is the phenomenal form that must of necessity be assumed by that measure of value which is imminent in commodities, labour-time. {"\n"} {"\n"}

            Paper money is a token representing gold or money. The relation between it and the values of commodities is this, that the latter are ideally expressed in the same quantities of gold that are symbolically represented by the paper. Only in so far as paper money represents gold, which like all other commodities has value, is it a symbol of value. {"\n"} {"\n"}

            It is not money that renders commodities commensurable. Just the contrary. It is because all commodities, as values, are realised human labour, and therefore commensurable, that their values can be measured by one and the same special commodity, and the latter be converted into the common measure of their values, i.e., into money. Money as a measure of value, is the phenomenal form that must of necessity be assumed by that measure of value which is imminent in commodities, labour-time. {"\n"} {"\n"}

            Paper money is a token representing gold or money. The relation between it and the values of commodities is this, that the latter are ideally expressed in the same quantities of gold that are symbolically represented by the paper. {"\n"} {"\n"}

            It is not money that renders commodities commensurable. Just the contrary. It is because all commodities, as values, are realised human labour, and therefore commensurable, that their values can be measured by one and the same special commodity, and the latter be converted into the common measure of their values, i.e., into money. Money as a measure of value, is the phenomenal form that must of necessity be assumed by that measure of value which is imminent in commodities, labour-time. {"\n"} {"\n"}

            Paper money is a token representing gold or money. The relation between it and the values of commodities is this, that the latter are ideally expressed in the same quantities of gold that are symbolically represented by the paper.
            </Text>
          </ScrollView>

        </View>
        <AdvanceButton
          text={ "ACCEPT" }
          pressAction={ Actions.banking }
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
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
  },
  intro: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    marginBottom: 2,
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  desc: {
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
  terms: {
    flex: 2.5,
    marginBottom: 30
  },
  termsText: {
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 10
  }
});

export default OnboardTermsAndConditions;
