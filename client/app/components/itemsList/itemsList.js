import angular from 'angular';
import itemsListComponent from './itemsList.component';

let itemsListModule = angular.module('itemsList', [])

.component('itemsList', itemsListComponent);

export default itemsListModule;
