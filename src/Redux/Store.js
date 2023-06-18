import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import TodoReducer from "./Reducers/TodoReducer";
import FruitsReducer from "./Reducers/FruitsReducer";
import PersistReducer from "./Reducers/PersistReducer";
import getApiData from "./Reducers/ApiReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  todos: TodoReducer,
  friuts: FruitsReducer,
  persistFriuts: PersistReducer,
  apiData: getApiData,
});

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["persistFriuts"],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const Store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);
