// Layout
import 'normalize.css';
import 'material-design-lite';
import 'material-design-lite/material.css';

// Angular
import angular from 'angular';
import angularComponent from 'angular-component';
import Components from './components/components';
import AppComponent from './app.component';
import ItemsActions from './components/common/items.actions';

// Redux
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import rootReducer from './components/root.reducer';

angular.module('app', [
  Components.name,
  ngRedux
])

.config(($ngReduxProvider) => {
  'ngInject';

  $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
})

.service('ItemsActions', ItemsActions)

.component('app', AppComponent);
