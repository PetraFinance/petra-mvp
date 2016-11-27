import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { AsyncStorage } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import Immutable from 'immutable';

// https://github.com/evgenyrodionov/redux-logger/pull/129#issuecomment-182743693
const loggerMiddleware = createLogger({
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type),
  })
});

const enhancers = compose(
  autoRehydrate(),
  applyMiddleware(thunkMiddleware, loggerMiddleware,),
);

const configureStore = function () {
  const store = createStore(
    rootReducer,
    enhancers,
  );
  return store;
};

export default configureStore;
