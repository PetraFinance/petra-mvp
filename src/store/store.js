import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

// https://github.com/evgenyrodionov/redux-logger/pull/129#issuecomment-182743693
const loggerMiddleware = createLogger({
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type),
  })
});

const configureStore = function (initialState = {}) {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware, ),
      autoRehydrate(),
    ),
  );
  return store;
};

export default configureStore;
