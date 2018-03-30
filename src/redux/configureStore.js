import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const middleWare = applyMiddleware(thunk);
  const createStoreWithMiddleware = compose(middleWare)(createStore);
  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
