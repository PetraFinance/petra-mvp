import React from 'react';
import { View, Navigator } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import { autoRehydrate, persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { AsyncStorage } from 'react-native';

import Goals from './goals/Goals';
import GoalsEdit from './goals/GoalsEdit';
import AddName from './goals/AddName';
import AddCost from './goals/AddCost';
import AddDueDate from './goals/AddDueDate';
import AddSaveAmount from './goals/AddSaveAmount';

import Settings from '../components/settings/Settings';

import Overview from './overview/Overview';
import AddAccount from './overview/AddAccount';
import TransactionsList from './overview/TransactionsList';

// direction="vertical" to handle scene transitions
// panHandlers={null} to disable swipe down to pop scene

const store = configureStore();
// add persistor={persistor} to Provider
const persistor = persistStore(store, {
  storage: AsyncStorage,
  transforms: [immutableTransform({
    whitelist: ['goals', 'accounts'],
  })]
});

// RESET IF THINGS GET OUT OF WACK
// const persistor = persistStore(store, {
//   storage: AsyncStorage,
//   transforms: [immutableTransform({
//     whitelist: ['goals', 'accounts'],
//   })]
// }).purge();

class App extends React.Component {
  render() {
    return (
      <Provider store={store} persistor={persistor}>
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
            <Scene key="transactionsList" component={TransactionsList} direction="vertical" panHandlers={null} />

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
