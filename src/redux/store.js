import { createStore, combineReducers } from "redux";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["reducer"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

const appReducers = combineReducers({
  reducer: reducer,
});

const persistedReducer = persistReducer(persistConfig, appReducers);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
