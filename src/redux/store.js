import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./loan/loanSlice"; // Import your root reducer

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // Add any specific configuration options for Redux Persist
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };
