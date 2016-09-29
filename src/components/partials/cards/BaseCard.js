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

    return {
      marginBottom,
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

BaseCard.propTypes = {

};

export default BaseCard;
