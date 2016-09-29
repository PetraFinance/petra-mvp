import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BaseCard extends React.Component {

  constructor(props) {
    super(props);
  }

  setStyle() {
    const backgroundColor = this.props.backgroundColor || "white";
    const borderColor = this.props.borderColor || '';
    const marginBottom = this.props.marginBottom || 0;
    const marginLeft = this.props.marginLeft || 0;
    const marginRight = this.props.marginRight || 0;
    const marginTop = this.props.marginTop || 0;

    return {
      marginBottom,
      marginRight,
      marginLeft,
      marginTop,
      backgroundColor,
      borderColor,
      alignSelf: 'stretch',
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
    };
  }

  render() {
    return (
      <View style={this.setStyle()}>
        {this.props.children}
      </View>
    );
  }
}

BaseCard.PropTypes = {
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  marginBottom: React.PropTypes.number,
  marginRight: React.PropTypes.number,
  marginLeft: React.PropTypes.number,
  marginTop: React.PropTypes.number,
};

export default BaseCard;
