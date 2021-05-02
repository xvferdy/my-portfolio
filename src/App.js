import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//pages
import About from "./pages/About";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
//components
import Profile from "./components/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

//material
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Container, Grid, Typography } from "@material-ui/core";
import { blue, orange, purple, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  //ada di app.css theme color 1 lagi
  palette: {
    primary: {
      // main: orange[700],
      // main: blue[500],
      // main: "#e91e63",
      main: "#00b8d4",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <Container className={"top_60"}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            {/* *** BROWSER ROUTER SUB DIRECTORY (GITHUB HOMEPAGE) *** */}
            <Router basename="/my-portfolio">
              {/* *** BROWSER ROUTER SUB DIRECTORY (GITHUB HOMEPAGE) *** */}
              <Header />
              <div className="main-content container_shadow">
                <Route
                  render={({ location }) => (
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        timeout={450}
                        classNames="fade"
                      >
                        <Switch>
                          {/* <Route path="/" exact>
                            <About />
                          </Route>
                          <Route path="/resume" exact>
                            <Resume />
                          </Route>
                          <Route path="/portfolio" exact>
                            <Portfolio />
                          </Route> */}

                          <Route path="/" exact component={About} />
                          <Route path="/resume" exact component={Resume} />
                          <Route
                            path="/portfolio"
                            exact
                            component={Portfolio}
                          />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  )}
                />
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default App;
