import React from 'react';
import { View } from 'react-native';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const backgroundColor = this.props.backgroundColor || 'white';
    const borderColor = this.props.borderColor || 'transparent';

    const paddingTop = this.props.paddingTop || 16;
    const paddingRight = this.props.paddingRight || 14;
    const paddingBottom = this.props.paddingBottom || 16;
    const paddingLeft = this.props.paddingLeft || 14;

    const genCardStyle = () => {
      return {
        backgroundColor,
        borderColor,
        alignSelf: 'stretch',
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
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
