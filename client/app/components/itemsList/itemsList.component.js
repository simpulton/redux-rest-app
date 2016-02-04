import template from './itemsList.html';
import controller from './itemsList.controller';
import './itemsList.styl';

let itemsListComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'itemListVM'
};

export default itemsListComponent;
