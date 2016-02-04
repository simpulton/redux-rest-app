import angular from 'angular';
import itemDetailComponent from './itemDetail.component';

let itemDetailModule = angular.module('itemDetail', [])

.component('itemDetail', itemDetailComponent);

export default itemDetailModule;
