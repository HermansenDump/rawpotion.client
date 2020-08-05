import React from "react";
import { ProvideDefaultWrappers } from "./lib";
import DashboardWrapper from "./components/layouts/dashboard.wrapper";

const App = () => (
  <div className="App">
    <ProvideDefaultWrappers>
      <DashboardWrapper>Some very wild content</DashboardWrapper>
    </ProvideDefaultWrappers>
  </div>
);

export default App;
