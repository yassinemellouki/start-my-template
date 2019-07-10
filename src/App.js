import {hot} from 'react-hot-loader/root';
import React, {Component} from 'react';
import Welcome from './components/welcome';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Welcome />
      </React.Fragment>
    );
  }
}

export default hot(App);
