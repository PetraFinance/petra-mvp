import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Toast extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.toastWrapper}>
        <View style={s.toast}>
          <Text style={s.toastText}>{this.props.toast}</Text>
          <View style={s.toastTakeAction}>
            <Text style={s.leftText}>{this.props.leftText}</Text>
            <Text style={s.rightText}>{this.props.rightText}</Text>
          </View>
        </View>
        <View style={s.exitToast}>
          <Image style={s.exitToastIcon} source={require('../../../assets/exitIcon.png')} />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  toastWrapper: {
    backgroundColor: '#455A64',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 14,
    paddingLeft: 14,
  },
  exitToastIcon: {
    height: 15,
    width: 15,
  },
  toast: {
    marginRight: 25,
  },
  exitToast: {
    position: 'absolute',
    top: 18,
    right: 16,
    height: 15,
    width: 15,
  },
  toastText: {
    fontSize: 14,
    fontFamily: 'Avenir',
    color: 'white',
    marginBottom: 5,
  },
  toastTakeAction: {
    flex: 1,
    flexDirection: 'row',
  },
  rightText: {
    flex: 1,
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: 'white',
  },
  leftText: {
    flex: 0.5,
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: 'white',
  },
});

Toast.propTypes = {
  leftText: React.PropTypes.string.isRequired,
  rightText: React.PropTypes.string.isRequired,
  toast: React.PropTypes.string.isRequired,
};

export default Toast;