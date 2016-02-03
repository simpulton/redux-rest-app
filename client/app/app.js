// CSS
import 'normalize.css';

// Angular
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Components from './components/components';
import AppComponent from './app.component';

// Redux
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import rootReducer from './components/root.reducer';

angular.module('app', [
  uiRouter,
  Components.name
])

.component('app', AppComponent);
