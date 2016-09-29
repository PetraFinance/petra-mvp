import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  setStyle() {
    const backgroundColor = this.props.backgroundColor;
    const borderColor = this.props.borderColor;

    return {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
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

Card.propTypes = {

};

export default Card;
