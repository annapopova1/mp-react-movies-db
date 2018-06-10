import { createStore, compose, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint no-underscore-dangle: [2, { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);
  // const persistor = persistStore(store);
  return { store/* , persistor */ };
};
