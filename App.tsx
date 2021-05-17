import { Text ,View} from 'react-native';
import React, { Suspense } from 'react';
import StartScreen from './src/screens/StartScreen'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import { schoolsReducer} from './src/store/reducers/schools'
import { usersReducer } from './src/store/reducers/user';
import { modeReducer } from './src/store/reducers/mode';

const rootReducer = combineReducers({
  schools: schoolsReducer,
  users: usersReducer,
  mode: modeReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: [
    "usersReducer",
    "schoolsReducer",
    "modeReducer"
  ],
};
const storageReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(storageReducer, applyMiddleware(thunk));
const storageStore = persistStore(store);
export default function App() {
  return (
    <Suspense fallback={<Text>Loading ...</Text>}>
      <Provider store={store}>
        <PersistGate persistor={storageStore} loading={null}>
            <StartScreen/>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

