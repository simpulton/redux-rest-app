import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemDetailComponent from './itemDetail.component';

let itemDetailModule = angular.module('itemDetail', [
  uiRouter
])

.component('itemDetail', itemDetailComponent);

export default itemDetailModule;
