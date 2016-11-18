import React from 'react';
import Navigation from './Navigation';
import ViewHeader from './ViewHeader';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class SubView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  render() {

    const headerColor = this.props.headerColor || "#29B6F6";
    const backgroundColor = this.props.backgroundColor || "#29B6F6";

    const childrenStyle = {
      flex: 1,
      backgroundColor,
    };

    return (
      <View style={s.container}>
        <ViewHeader
          title={this.props.title}
          leftIcon={this.props.leftIcon}
          backgroundColor={headerColor}
          textColor="white"
        />
        <View style={childrenStyle}>
          {this.props.children}
        </View>
        <KeyboardSpacer />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
});

SubView.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
  headerColor: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  leftIcon: React.PropTypes.object,
  rightIcon: React.PropTypes.object,
}

export default SubView;
