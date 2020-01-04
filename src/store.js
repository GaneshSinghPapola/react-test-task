
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers'
import rootSaga from './sagas'
import logger from 'redux-logger'
const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const middleware = [sagaMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware, logger)));
  sagaMiddleware.run(rootSaga);
  return store;
}
