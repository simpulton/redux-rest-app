import template from './itemDetail.html';
import controller from './itemDetail.controller';
import './itemDetail.styl';

let itemDetailComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default itemDetailComponent;
