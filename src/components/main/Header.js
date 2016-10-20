import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Header extends React.Component {
  render() {
    const getIcon = (type) => {
      switch(type) {
        case 'add':
          return (<Image style={{ height: 15, width: 15 }} source={require('../../../assets/bluePlus.png')} />);
        case 'backWhite':
          return (<Image style={{ height: 15, width: 15 }} source={require('../../../assets/WhiteBackArrow.png')} />);
        case 'backBlue':
          return (<Image style={{ height: 15, width: 15 }} source={require('../../../assets/BlueBackArrow.png')} />);
        default:
          return (<View />);
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
      );
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
      );
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
    });

    const rightIcon = this.props.rightIcon || { type: '', action: null };
    const leftIcon = this.props.leftIcon || { type: '', action: null };
    const headerBackgroundColor = this.props.headerBackgroundColor || '#F9FAFC';
    const headerTextColor = this.props.headerTextColor || '#37474F';
    const title = this.props.title;

    return (
      <View style={setHeaderStyle(headerBackgroundColor)}>
        <Text style={setHeaderTextStyle(headerTextColor)}>{title}</Text>
        {genRightHeaderIcon(rightIcon, headerBackgroundColor)}
        {genLeftHeaderIcon(leftIcon, headerBackgroundColor)}
      </View>
    )
  }
}

const s = StyleSheet.create({
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

export default Header;
