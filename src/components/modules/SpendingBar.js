import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dimensions from 'Dimensions';

// Works by taking the dimensions of the screen and
// then accounting for the margins of the spending bar.

class SpendingBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const genSpendingBar = () => {
      const bar = [];
      const goal = parseInt(this.props.cost);
      const current = parseInt(this.props.currentSaved);
      const fill = current / goal;
      const remaining = 1 - fill;

      const fillWidth = (Dimensions.get('window').width - 56) * fill;
      const remainingWidth = (Dimensions.get('window').width - 56) * remaining;

      const backgroundColor = this.props.color;
      const fade = this.props.barFade;

      bar.push(<View key={0} style={{ backgroundColor, height: 5, width: fillWidth }} />);
      bar.push(<View key={1} style={{ backgroundColor: fade, height: 5, width: remainingWidth }} />);

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
    marginTop: 20,
  },
});

SpendingBar.propTypes = {
  color: React.PropTypes.string.isRequired,
  currentSaved: React.PropTypes.string.isRequired,
  cost: React.PropTypes.string.isRequired,
};

export default SpendingBar;
