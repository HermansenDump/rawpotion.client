import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./user.slice";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import auth from "./user.slice";

let store;

const rootReducer = combineReducers({
  auth,
});

const makeStore = (initialState: any) => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
  });
};

export const initializeStore = (preloadedState: RootState) => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useStore = (initialState) =>
  useMemo(() => initializeStore(initialState), [initialState]);
