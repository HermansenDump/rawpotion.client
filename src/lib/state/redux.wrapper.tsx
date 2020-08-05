import React, { FC } from "react";
import { RootState, useStore } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Store } from "redux";
import { persistStore } from "redux-persist";

interface ReduxPersistWrapperProps {
  store: Store<RootState>;
}

const ReduxPersistWrapper: FC<ReduxPersistWrapperProps> = ({
  children,
  store,
}) => {
  const persistedStore = persistStore(store);

  return (
    <PersistGate loading={null} persistor={persistedStore}>
      {children}
    </PersistGate>
  );
};

export const ReduxWrapper: FC = (props) => {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <ReduxPersistWrapper store={store}>{props.children}</ReduxPersistWrapper>
    </ReduxProvider>
  );
};
