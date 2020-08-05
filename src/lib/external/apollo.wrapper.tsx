import React, { FC } from "react";
import { useApollo } from "./api/graphql";
import { ApolloProvider } from "@apollo/client";

export const ApolloWrapper: FC = ({ children }) => {
  const apollo = useApollo();

  return <ApolloProvider client={apollo}>{children}</ApolloProvider>;
};
