import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import Navigation from './Navigation';
import Toast from '../partials/Toast';

class BaseView extends React.Component {

  render() {
    const getViewType = (scroll) => {
      if (scroll)
        return (<ScrollView style={s.scrollContainer}>{this.props.children}</ScrollView>);
      return (<View style={s.viewContainer}>{this.props.children}</View>);
    };

    const getIcon = (type) => {
      switch(type) {
        case 'add':
          return (<Image source={require('../../../assets/bluePlus.png')}/>);
        case 'exit':
          return (<Image source={require('../../../assets/exitIcon.png')}/>);
        default:
          return (<View></View>);
      }
    };

    const genRightHeaderIcon = (icon, underlayColor) => {
      const symbol = getIcon(icon.type);
      return (
        <TouchableHighlight
          underlayColor={underlayColor}
          onPress={icon.action}
          style={s.rightHeaderIcon}
        >
          {symbol}
        </TouchableHighlight>
      )
    };

    const genLeftHeaderIcon = (icon, underlayColor) => {
      const symbol = getIcon(icon.type);
      return (
        <TouchableHighlight
          underlayColor={underlayColor}
          onPress={icon.action}
          style={s.leftHeaderIcon}
        >
          {symbol}
        </TouchableHighlight>
      )
    };

    const setHeaderStyle = (backgroundColor) => ({
      height: 65,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
    });

    const setHeaderTextStyle = (color) => ({
      fontFamily: 'Avenir-Heavy',
      fontSize: 17,
      color,
    })

    genNavBar = (show) => {
      if (!show)
        return (<Navigation parent={this.props.parent}/>);
      return (<View></View>);
    };

    // the toast logic could go here
    // for now just return true if it's the overview page
    genToast = () => {
      if (this.props.title.toLowerCase() === 'overview') {
        return (
          <Toast
            toast={'You were standing with your girlfriends in the street, falling back on forever, I wonder what you came to be'}
            leftText={'Learn More'}
            rightText={''}
          />
        )
      } else {
        return (<View></View>);
      }
    };

    const rightIcon = this.props.rightIcon || { type: '', action: null }
    const leftIcon = this.props.leftIcon || { type: '', action: null }
    const headerBackgroundColor = this.props.headerBackgroundColor || '#F9FAFC';
    const headerTextColor = this.props.headerTextColor || '#37474F';
    const hideBottomNavBar = this.props.hideBottomNavBar;

    return (
      <View style={s.page}>
        <View style={setHeaderStyle(headerBackgroundColor)}>
          <Text style={setHeaderTextStyle(headerTextColor)}>{this.props.title.toUpperCase()}</Text>
          {genRightHeaderIcon(rightIcon, headerBackgroundColor)}
          {genLeftHeaderIcon(leftIcon, headerBackgroundColor)}
        </View>
        {getViewType(this.props.scroll)}
        {genToast()}
        {genNavBar(hideBottomNavBar)}
      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  viewContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  rightHeaderIcon: {
    position: 'absolute',
    right: 14,
    top: 35,
  },
  leftHeaderIcon: {
    position: 'absolute',
    left: 14,
    top: 35,
  },
});

BaseView.PropTypes = {
  headerTextColor: React.PropTypes.string,
  headerBackgroundColor: React.PropTypes.string,
  hideBottomNavBar: React.PropTypes.bool,
  rightIcon: React.PropTypes.object,
  leftIcon: React.PropTypes.object,
};

export default BaseView;
