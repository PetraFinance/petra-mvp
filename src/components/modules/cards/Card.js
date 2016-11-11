import React from 'react';
import { View } from 'react-native';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const backgroundColor = this.props.backgroundColor || 'white';
    const borderColor = this.props.borderColor || 'transparent';

    let borderTopLeftRadius = this.props.borderTopLeftRadius;
    if (!borderTopLeftRadius) {
      borderTopLeftRadius = 0;
    }

    let borderTopRightRadius = this.props.borderTopRightRadius;
    if (!borderTopRightRadius) {
      borderTopRightRadius = 0;
    }

    let borderRadius = this.props.borderRadius;
    if (borderRadius) {
      borderTopLeftRadius = borderRadius;
      borderTopRightRadius = borderRadius;
    } else {
      borderRadius = 0;
    }

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
};

export default Card;
