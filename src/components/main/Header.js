import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

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
        case 'exitWhite':
          return (<Image style={{ height: 15, width: 15 }} source={require('../../../assets/WhiteExit.png')} />);
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
    const backgroundColor = this.props.backgroundColor || '#F9FAFC';
    const textColor = this.props.textColor || '#37474F';
    const title = this.props.title;

    return (
      <View style={setHeaderStyle(backgroundColor)}>
        <Text style={setHeaderTextStyle(textColor)}>{title}</Text>
        {genRightHeaderIcon(rightIcon, backgroundColor)}
        {genLeftHeaderIcon(leftIcon, backgroundColor)}
      </View>
    )
  }
}

const s = StyleSheet.create({
  rightHeaderIcon: {
    position: 'absolute',
    right: 14,
    top: 33,
  },
  leftHeaderIcon: {
    position: 'absolute',
    left: 14,
    top: 33,
  },
});

export default Header;
