import React from 'react';
import { View } from 'react-native';

class Divider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const height = this.props.height;
    const width = this.props.width;
    const backgroundColor = this.props.backgroundColor || '#CCD0D3';
    const marginBottom = this.props.marginBottom || 0;
    const marginLeft = this.props.marginLeft || 0;
    const marginRight = this.props.marginRight || 0;
    const marginTop = this.props.marginTop || 0;

    const setStyle = () => {
      return {
        marginBottom,
        marginRight,
        marginLeft,
        marginTop,
        height,
        width,
        backgroundColor,
      }
    }

    return (
      <View style={setStyle()}></View>
    );
  }
}

Divider.PropTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  marginBottom: React.PropTypes.number,
  marginRight: React.PropTypes.number,
  marginLeft: React.PropTypes.number,
  marginTop: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
};

export default Divider;
