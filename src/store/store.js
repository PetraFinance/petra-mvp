import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

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
