import template from './itemsList.html';
import controller from './itemsList.controller';
import './itemsList.styl';

let itemsListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default itemsListComponent;
