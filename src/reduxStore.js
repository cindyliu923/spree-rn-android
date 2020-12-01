import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import accountReducer from './account/redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ account: accountReducer });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore = () => {
  const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  const persistor = persistStore(store);

  return { store, persistor }
}