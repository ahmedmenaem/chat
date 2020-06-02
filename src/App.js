import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./constants";

const HomePage = lazy(() => import("./pages/Home/HomePage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="" component={HomePage} />
          </Suspense>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
