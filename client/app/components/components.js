import angular from 'angular';
import ItemsListModule from './itemsList/itemsList';
import ItemDetailModule from './itemDetail/itemDetail';

let componentModule = angular.module('app.components', [
  ItemsListModule.name,
  ItemDetailModule.name
]);

export default componentModule;
