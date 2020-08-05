import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

const createIsomorphLink = () => {
  const { HttpLink } = require("@apollo/client/link/http");
  return new HttpLink({
    uri: "https://localhost:5006/graphql",
    credentials: "include",
  });
};

export const createApolloClient = () =>
  new ApolloClient({
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });

export const useApollo = (): ApolloClient<NormalizedCacheObject> =>
  useMemo(() => createApolloClient(), []);
