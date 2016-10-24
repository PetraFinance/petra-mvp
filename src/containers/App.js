import React from 'react';
import { View, Navigator } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import Goals from './Goals';
import GoalsAdd from './GoalsAdd';

import Settings from '../components/main/Settings';

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
              initial
              hideNavBar
            />
            <Scene
              key="goals_add"
              component={GoalsAdd}
              hideNavBar
            />

            <Scene
              key="settings"
              component={Settings}
              type="replace"
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
