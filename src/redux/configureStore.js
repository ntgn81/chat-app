import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  const middleWare = applyMiddleware(thunk);
  const createStoreWithMiddleware = compose(middleWare)(createStore);
  return createStoreWithMiddleware(
    rootReducer,
    { comingFromRedux: 'THIS IS COMING FROM REDUX' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
