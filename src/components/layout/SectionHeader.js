import React from 'react';
import { Text, StyleSheet } from 'react-native';

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={s.sectionHeader}>{this.props.text}</Text>
    );
  }
}

const s = StyleSheet.create({
  sectionHeader: {
    paddingTop: 20,
    paddingBottom: 8,
    fontFamily: 'Avenir-Heavy',
    fontSize: 13,
  },
});

SectionHeader.PropTypes = {
  text: React.PropTypes.string.isRequired,
};

export default SectionHeader;
