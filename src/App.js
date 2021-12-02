import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme, darkTheme } from "context/Theme";
import { GlobalDataContext } from "context/GlobalData";
import SnackBar from "component/global/SnackBar.js";
import ProtectedRoute from "page/ProtectedRoute";
import NavbarTop from "component/global/NavbarTop";
import Dashboard from "page/Dashboard";
import LandingPage from "page/LandingPage";
import PrivacyPolicy from "page/PrivacyPolicy";
import TermsAndConditions from "page/TermsAndConditions";
const App = () => {
  const { themeMode, snackBarRef } = React.useContext(GlobalDataContext);

  return (
    <Fragment>
      <ThemeProvider theme={themeMode ? mainTheme : darkTheme}>
        <SnackBar ref={snackBarRef} />
        <NavbarTop />
        <Container>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              exact
              path="/terms-conditions"
              component={TermsAndConditions}
            />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
