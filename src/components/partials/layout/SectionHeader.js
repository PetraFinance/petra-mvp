import React from 'react';
import { Text, StyleSheet } from 'react-native';

class SectionHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={s.sectionHeader}>{this.props.header}</Text>
    );
  }
}

const s = StyleSheet.create({
  sectionHeader: {
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: 'Avenir-Heavy',
    fontSize: 13,
  },
});

SectionHeader.PropTypes = {
  header: React.PropTypes.string.isRequired,
};

export default SectionHeader;
