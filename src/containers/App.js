import React from 'react';
import { View, Navigator } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import Goals from './goals/Goals';
import GoalsEdit from './goals/GoalsEdit';
import AddName from './goals/AddName';
import AddCost from './goals/AddCost';
import AddDueDate from './goals/AddDueDate';
import AddSaveAmount from './goals/AddSaveAmount';

import Settings from '../components/settings/Settings';

import Overview from './overview/Overview';
import AddAccount from '../components/overview/AddAccount';
import TransactionList from '../components/overview/TransactionList';

// direction="vertical" to handle scene transitions
// panHandlers={null} to disable swipe down to pop scene

const store = configureStore();

// const persistor = persistStore(store, {storage: AsyncStorage}, () => { console.log('restored'); });
// add persistor={persistor} to Provider

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
            />
            <Scene key="goalsName" component={AddName} />
            <Scene key="goalsCost" component={AddCost} />
            <Scene key="goalsSaveAmount" component={AddSaveAmount} />
            <Scene key="goalsEdit" component={GoalsEdit} direction="vertical" panHandlers={null} />

            <Scene
              key="overview"
              component={Overview}
              type="replace"
              initial
            />
            <Scene key="addAccount" component={AddAccount} direction="vertical" panHandlers={null} />
            <Scene key="transactionsList" component={TransactionList} direction="vertical" panHandlers={null} />

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
