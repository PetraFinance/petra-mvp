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
            <Scene key="goals_name" component={AddName} />
            <Scene key="goals_cost" component={AddCost} />
            <Scene key="goals_dueDate" component={AddDueDate} />
            <Scene key="goals_saveAmount" component={AddSaveAmount} />
            <Scene key="goals_edit" component={GoalsEdit} />

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
