import React from 'react';
import { View } from 'react-native';
import Divider from '../layout/Divider';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const genCardStyle = () => {
      const backgroundColor = this.props.backgroundColor || 'white';
      const borderColor = this.props.borderColor || 'transparent';

      return {
        backgroundColor,
        borderColor,
        alignSelf: 'stretch',
        paddingRight: 14,
        paddingLeft: 14,
        paddingTop: 16,
        paddingBottom: 16,
      };
    };

    const genWrapperStyle = () => {

      const marginBottom = this.props.marginBottom || 0;
      const marginLeft = this.props.marginLeft || 0;
      const marginRight = this.props.marginRight || 0;
      const marginTop = this.props.marginTop || 0;
      const backgroundColor = this.props.backgroundColor || 'white';
      
      return {
        backgroundColor,
        marginBottom,
        marginRight,
        marginLeft,
        marginTop,
      };
    };

    const genDivider = () => {
      if (this.props.divider) {
        return (<Divider/>);
      } else {
        return (<View></View>);
      }
    };

    return (
      <View style={genWrapperStyle()}>
        <View style={genCardStyle()}>
          {this.props.children}
        </View>
        {genDivider()}
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
