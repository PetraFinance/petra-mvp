import React from 'react';
import { View } from 'react-native';
import Dimensions from 'Dimensions';

class Divider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const backgroundColor = this.props.backgroundColor || '#CCD0D3';
    const marginLeft = this.props.marginLeft || 14;
    const marginRight = this.props.marginRight || 0;
    const marginTop = this.props.marginTop || 0;
    const marginBottom = this.props.marginBottom || 0;
    const height = this.props.height || 1;
    const width = this.props.width || (Dimensions.get('window').width - marginLeft);

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
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  marginBottom: React.PropTypes.number,
  marginRight: React.PropTypes.number,
  marginLeft: React.PropTypes.number,
  marginTop: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
};

export default Divider;
