import auth from "./slices/user.slice";
import { persistReducer } from "redux-persist";
import authPersistConfig from "./persist/authPersistConfig";
import { combineReducers } from "redux";

export const wrapAuth = () => persistReducer(authPersistConfig, auth);

export default () => {
  return combineReducers({ auth: wrapAuth() });
};
