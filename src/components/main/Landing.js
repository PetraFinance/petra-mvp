import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navigation from './Navigation';

class Landing extends React.Component {

  render() {
    return (
      <View style={s.page}>
        <View style={s.pageHeader}>
          <Text style={s.pageHeaderText}>Overview</Text>
        </View>
        <ScrollView style={s.container}>
          <View style={s.overviewPanel}>
          </View>
          <View style={s.tipPanel}>
            <Text style={s.tip}>Oh this has gotta be the good life, oh this has gotta be the good life, feels like this city is on fire tonight, oh this has gotta be the good life</Text>
            <View style={s.tipTakeAction}>
              <Text style={s.learnMoreText}>LEARN MORE</Text>
              <Text style={s.adjustFundsText}>ADJUST FUNDS</Text>
            </View>
          </View>

          <View style={s.dateEntry}>

            <View style={s.dateDecoration}></View>
            <Text style={s.date}>TODAY, SEP 19TH</Text>

            <View style={s.transHistory}>
              <View style={s.general}>
                <Text style={s.spendingHeader}>GENERAL SPENDING</Text>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Starbucks</Text>
                  <Text style={s.expenseCost}>$9.99</Text>
                </View>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Walgreens</Text>
                  <Text style={s.expenseCost}>$159.99</Text>
                </View>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Dank Memes</Text>
                  <Text style={s.expenseCost}>$45.23</Text>
                </View>
              </View>
              <View style={s.general}>
                <Text style={s.spendingHeader}>RECURRING SPENDING</Text>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Amazon</Text>
                  <Text style={s.expenseCost}>$54.32</Text>
                </View>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Asian Ghetto</Text>
                  <Text style={s.expenseCost}>$23.41</Text>
                </View>
              </View>
              <View style={s.timeline}></View>
            </View>
          </View>

          <View style={s.dateEntry}>

            <View style={s.dateDecoration}></View>
            <Text style={s.date}>SEP 20TH</Text>

            <View style={s.transHistory}>
              <View style={s.general}>
                <Text style={s.spendingHeader}>GENERAL SPENDING</Text>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Starbucks</Text>
                  <Text style={s.expenseCost}>$9.99</Text>
                </View>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Walgreens</Text>
                  <Text style={s.expenseCost}>$159.99</Text>
                </View>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Dank Memes</Text>
                  <Text style={s.expenseCost}>$45.23</Text>
                </View>
              </View>
              <View style={s.general}>
                <Text style={s.spendingHeader}>RECURRING SPENDING</Text>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Amazon</Text>
                  <Text style={s.expenseCost}>$54.32</Text>
                </View>
                <View style={s.expenseEntry}>
                  <Text style={s.expenseDesc}>Asian Ghetto</Text>
                  <Text style={s.expenseCost}>$23.41</Text>
                </View>
              </View>
              <View style={s.timeline}></View>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
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
  spendingHeader: {
    marginBottom: 10,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  expenseEntry: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  expenseCost: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Avenir',
  },
  expenseDesc: {
    fontFamily: 'Avenir',
  },
  tipPanel: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#03A9F4',
    borderWidth: 2,
    borderRadius: 5,
  },
  tip: {
    fontFamily: 'Avenir',
    marginBottom: 10,
  },
  tipTakeAction: {
    flex: 1,
    flexDirection: 'row',
  },
  adjustFundsText: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  learnMoreText: {
    flex: 0.5,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
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
    marginBottom: 15,
    backgroundColor: '#03A9F4',
    borderRadius: 5,
  },
  pageHeader: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageHeaderText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9F4',
  },
  container: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

export default Landing;
