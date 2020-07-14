import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
  Reducer,
} from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./user.slice";
import { useMemo } from "react";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  persistedReducer,
});

let store:
  | EnhancedStore<
      { persistedReducer: Reducer<AuthState, AnyAction> },
      AnyAction,
      any
    >
  | undefined;

const makeStore = (initialState: any) => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
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
