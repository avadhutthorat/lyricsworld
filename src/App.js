import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
            <div className="container" />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
