import React, { Component } from "react";
import Header from "./components/Headers";
// connect / ambil state dari redux
import { connect } from "react-redux";
// ubah state dari redux
import { bindActionCreators } from "redux";
import { setTitle } from "./store/actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Belajar Redux"
    };
  }
  ubahTitle = () => {
    this.props.setTitle("Merubah data diredux dengan action");
  };

  render() {
    return (
      <div className="App">
        <h2>{this.props.title}</h2>
        <button onClick={this.ubahTitle}> Click Me </button>
      </div>
    );
  }
}
// ambil state di redux reducers
const mapStateToProps = state => {
  return { title: state.title };
};

const mapDispatchProps = dispatch => {
  return bindActionCreators({ setTitle }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchProps
)(App);
