import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import Landing from "../components/Landing";

// no reducers yet! 
// const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Landing />
      // <Provider store={store}>
      //   {() => <Landing />}
      // </Provider>
    );
  }
}

export default App;
