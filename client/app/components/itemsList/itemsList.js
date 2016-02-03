import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemsListComponent from './itemsList.component';

let itemsListModule = angular.module('itemsList', [
  uiRouter
])

.component('itemsList', itemsListComponent);

export default itemsListModule;
