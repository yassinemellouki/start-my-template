import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faSass,
  faFontAwesome,
} from '@fortawesome/free-brands-svg-icons';

class Includes extends Component {
  render() {
    return (
      <div className="pack-includes">
        <FontAwesomeIcon icon={faBootstrap} size="2x" />
        <FontAwesomeIcon icon={faSass} size="2x" />
        <FontAwesomeIcon icon={faFontAwesome} size="2x" />
      </div>
    );
  }
}

export default Includes;
