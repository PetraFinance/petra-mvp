import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

class AccountsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const genAccountsCard = () => (
      <View style={s.container}>
        <View style={s.accountEntry}>
          <Text style={s.accountName}>{this.props.accountName}</Text>
          <Text style={s.accountValue}>{this.props.accountValue}</Text>
        </View>
        <Text style={s.accountDesc}>{this.props.accountDesc}</Text>
      </View>
    );

    return (
      <Card
        children={genAccountsCard()}
        divider={this.props.divider}
      />
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  accountEntry: {
    flexDirection: 'row',
  },
  accountName: {
    flex: 1,
    fontFamily: 'Avenir',
  },
  accountValue: {
    flex: 1,
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  accountDesc: {
    flex: 1,
    fontFamily: 'Avenir',
    color: '#8A8B8C',
  },
});

AccountsCard.propTypes = {
  accountName: React.PropTypes.string.isRequired,
  accountDesc: React.PropTypes.string.isRequired,
  accountValue: React.PropTypes.string.isRequired,
  divider: React.PropTypes.bool,
};

export default AccountsCard;
