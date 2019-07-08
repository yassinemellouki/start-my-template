import React, {Component} from 'react';
import Github from './../../img/geek-life/Github.png';
import Smoke from './../../img/geek-life/Smoke.gif';
import Chain from './../../img/geek-life/Chain-Dollar.png';
import Glasses from './../../img/geek-life/Glasses.png';
import Hat from './../../img/geek-life/Hat.png';

class Geeklife extends Component {
  render() {
    return (
      <div className="geek-life">
        <img src={Github} className="github" alt="Github gang" />
        <img src={Smoke} className="cigarette" alt="cigarette" />
        <img src={Glasses} className="glasses" alt="hlasses" />
        <img src={Hat} className="hat" alt="hat" />
        <img src={Chain} className="chain" alt="chain" />
      </div>
    );
  }
}

export default Geeklife;
