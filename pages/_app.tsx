import React from "react";
import Head from "next/head";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { AppProps } from "next/app";
import { darkTheme, lightTheme } from "../src/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { useStore } from "../src/lib/slices/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import { useApollo } from "../src/lib/graphql/graphql";
import {ApolloProvider} from "@apollo/react-hooks";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [localTheme, setLocalTheme] = React.useState(darkTheme);
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);
  const persistor = persistStore(store);

  return (
    <>
      <Head>
        <title>Rawpotion | All Your Food Needs</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={localTheme}>
        <StylesProvider>
          <ThemeProvider theme={localTheme}>
            <CssBaseline />
            <Provider store={store}>
              <PersistGate
                loading={<Component {...pageProps} />}
                persistor={persistor}
              >
                <ApolloProvider client={apolloClient}>
                  <Component {...pageProps} />
                </ApolloProvider>
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </StylesProvider>
      </MuiThemeProvider>
    </>
  );
};

export default App;
