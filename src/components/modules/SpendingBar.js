import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dimensions from 'Dimensions';

class SpendingBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const genSpendingBar = () => {
      const bar = [];
      const goal = this.props.goal;
      const current = this.props.currentSaved;
      const fill = current / goal;
      const remaining = 1 - fill;

      const fillWidth = (Dimensions.get('window').width - 56) * fill;
      const remainingWidth = (Dimensions.get('window').width - 56) * remaining;

      const backgroundColor = this.props.color;

      bar.push(<View key={0} style={{ backgroundColor, height: 5, width: fillWidth }} />);
      bar.push(<View key={1} style={{ backgroundColor: '#E5E5E5', height: 5, width: remainingWidth }} />);

      return bar;
    };

    return (
      <View style={s.spendingBar}>
        {genSpendingBar()}
      </View>
    );
  }
}

const s = StyleSheet.create({
  spendingBar: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
  },
});

SpendingBar.propTypes = {
  color: React.PropTypes.string.isRequired,
  currentSaved: React.PropTypes.number.isRequired,
  goal: React.PropTypes.number.isRequired,
};

export default SpendingBar;
