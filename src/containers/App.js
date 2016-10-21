import React from 'react';
import { View, Navigator } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import Goals from '../components/main/Goals';
import GoalsCreate from '../components/main/GoalsCreate';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="Root">
            <Scene
              key="goals"
              component={Goals}
              type="replace"
              hideNavBar
            />
            <Scene
              key="goals_create"
              component={GoalsCreate}
              initial
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
