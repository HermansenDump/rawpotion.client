import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCache,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient;

const createIsomorphLink = () => {
  //if (typeof window !== "undefined") {
  const { HttpLink } = require("@apollo/client/link/http");
  return new HttpLink({
    uri: "https://localhost:5006/graphql",
    credentials: "include",
  });
  //}
};

export const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });

export function initializeApollo(
  initialState = null
): ApolloClient<NormalizedCache> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export const useApollo = (initialState): ApolloClient<NormalizedCache> =>
  useMemo(() => initializeApollo(initialState), [initialState]);
