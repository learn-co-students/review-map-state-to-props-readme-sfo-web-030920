import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClickItems() {
    this.props.store.dispatch({
      type: "GET_COUNT_OF_ITEMS",
    });
  }

  setUserInfo() {
    debugger;
    this.props.store.dispatch({
      type: "SET_USER_INFO",
      payload: { name: "Eduardo", lastName: "Mendoza" },
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: "GET_COUNT_OF_USERS",
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
        {this.props.usuario
          ? `Welcome back ${this.props.usuario.name}`
          : "Login into application"}
        <button onClick={() => this.handleOnClickItems()}>
          Click to change items count
        </button>
        <button onClick={() => this.handleOnClickUsers()}>
          Click to change user count
        </button>
        <button onClick={() => this.setUserInfo()}>Set user to state</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { items: state.items, usuario: state.usuario };
};

export default connect(mapStateToProps)(App);
