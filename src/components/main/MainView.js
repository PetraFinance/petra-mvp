import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { Stylesheet, Text, View } from 'react-native';

class MainView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <Header
            title={this.props.title}
          />
        </View>
        <View style={s.children}>
          {this.props.children}
        </View>
        <View>
          <Navigation
            title={this.props.title}
          />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({

});

export default MainView;
