import React from 'react';
import { View } from 'react-native';
import { setZeroIfNull } from '../../../helpers/layout';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const backgroundColor = this.props.backgroundColor || 'white';
    const borderColor = this.props.borderColor || 'transparent';

    let borderTopLeftRadius = setZeroIfNull(this.props.borderTopLeftRadius);
    let borderTopRightRadius = setZeroIfNull(this.props.borderTopRightRadius);
    const borderRadius = setZeroIfNull(this.props.borderRadius);
    if (borderRadius !== 0) {
      borderTopLeftRadius = borderRadius;
      borderTopRightRadius = borderRadius;
    }

    const marginBottom = setZeroIfNull(this.props.marginBottom);

    const paddingTop = this.props.paddingTop || 16;
    const paddingRight = this.props.paddingRight || 14;
    const paddingBottom = this.props.paddingBottom || 16;
    const paddingLeft = this.props.paddingLeft || 14;

    const genCardStyle = () => {
      return {
        borderRadius,
        backgroundColor,
        borderColor,
        alignSelf: 'stretch',
        marginBottom,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        borderTopLeftRadius,
        borderTopRightRadius,
      };
    };

    return (
      <View style={genCardStyle()}>
        {this.props.children}
      </View>
    );
  }
}

Card.propTypes = {
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  marginBottom: React.PropTypes.number,
  marginRight: React.PropTypes.number,
  marginLeft: React.PropTypes.number,
  marginTop: React.PropTypes.number,
  borderTopLeftRadius: React.PropTypes.number,
  borderTopRightRadius: React.PropTypes.number,
  borderRadius: React.PropTypes.number,
};

export default Card;
