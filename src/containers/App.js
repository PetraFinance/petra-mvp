import React from 'react';
import { View, Navigator } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import Goals from './goals/Goals';
import GoalsEdit from './goals/GoalsEdit';
import AddName from './goals/AddName';
import AddCost from './goals/AddCost';
import AddDueDate from './goals/AddDueDate';
import AddSaveAmount from './goals/AddSaveAmount';

import Settings from '../components/settings/Settings';

import Overview from '../components/overview/Overview';

// direction="vertical" to handle scene transitions

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar>
          <Scene key="Root">
            <Scene
              key="goals"
              component={Goals}
              type="replace"
              initial
            />
            <Scene key="goalsName" component={AddName} />
            <Scene key="goalsCost" component={AddCost} />
            <Scene key="goalsSaveAmount" component={AddSaveAmount} />
            <Scene key="goalsEdit" component={GoalsEdit} direction="vertical" />

            <Scene
              key="overview"
              component={Overview}
              type="replace"
            />

            <Scene
              key="settings"
              component={Settings}
              type="replace"
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
