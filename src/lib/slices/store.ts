import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import auth, { AuthState } from "./user.slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";

let store;

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user"],
};

export const persistedAuthReducer: Reducer<
  AuthState,
  AnyAction
> = persistReducer(persistConfig, auth);
const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

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
