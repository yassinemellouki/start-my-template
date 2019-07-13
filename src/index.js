import './js/script';
import './style.scss';

// import index.html file to trigger live reload
if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}
