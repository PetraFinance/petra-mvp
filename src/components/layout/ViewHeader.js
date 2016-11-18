import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

class ViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

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

    const rightIcon = this.props.rightIcon || { type: '', action: null };
    const leftIcon = this.props.leftIcon || { type: '', action: null };
    const backgroundColor = this.props.backgroundColor || '#F9FAFC';
    const color = this.props.textColor || '#29B6F6';
    const title = this.props.title;

    const setHeaderStyle = () => ({
      height: 65,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      borderBottomWidth: 0.3,
      borderBottomColor: '#828287',
    });

    const setHeaderTextStyle = () => ({
      fontFamily: 'Avenir-Heavy',
      fontSize: 17,
      color,
    });

    return (
      <View style={setHeaderStyle()}>
        <Text style={setHeaderTextStyle()}>{title}</Text>
        {genRightHeaderIcon(rightIcon, backgroundColor)}
        {genLeftHeaderIcon(leftIcon, backgroundColor)}
      </View>
    )
  }
}

const s = StyleSheet.create({
  rightHeaderIcon: {
    position: 'absolute',
    height: 28,
    width: 45,
    right: -13,
    top: 35,
  },
  leftHeaderIcon: {
    position: 'absolute',
    height: 28,
    width: 45,
    left: 15,
    top: 35,
  },
});

ViewHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  rightIcon: React.PropTypes.object,
  leftIcon: React.PropTypes.object,
  textColor: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
}

export default ViewHeader;
