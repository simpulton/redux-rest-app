import template from './itemDetail.html';
import controller from './itemDetail.controller';
import './itemDetail.styl';

let itemDetailComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'itemDetailVM'
};

export default itemDetailComponent;
