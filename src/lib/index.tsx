import React, { FC } from "react";
import { ReduxWrapper } from "./state/redux.wrapper";
import { ApolloWrapper } from "./external/apollo.wrapper";
import {MaterialWrapper} from "./themes";

export const ProvideDefaultWrappers: FC = ({ children }) => {
  return (
    <ReduxWrapper>
      <ApolloWrapper>
        <MaterialWrapper>{children}</MaterialWrapper>
      </ApolloWrapper>
    </ReduxWrapper>
  );
};
