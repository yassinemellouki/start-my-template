import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {
  faFontAwesome,
  faBootstrap,
  faHtml5,
  faSass,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

library.add(faFontAwesome, faBootstrap, faHtml5, faSass, faJsSquare);

dom.i2svg();
