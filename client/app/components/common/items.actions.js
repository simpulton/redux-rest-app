import angular from 'angular';

const BASE_URL = 'http://localhost:3000/items/';

let ItemsActions = ($http) => {
  'ngInject';

  let loadItems = () => {
    return (dispatch) => {
      $http.get(BASE_URL)
        .then(response => response.data)
        .then(payload => ({ type: 'ADD_ITEMS', payload }))
        .then(action => dispatch(action));
    }
  }

  let saveItem = (item) => {
    (item.id) ? updateItem(item) : createItem(item);
  }

  let createItem = (item) => {
    $http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => store.dispatch(action));
  }

  let updateItem = (item) => {
    $http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

  let deleteItem = (item) => {
    return (dispatch) => {
      $http.delete(`${BASE_URL}${item.id}`)
        .then(action => dispatch({ type: 'DELETE_ITEM', payload: item }));
    }
  }

  let selectItem = (item) => {
    return { type: 'SELECT_ITEM', payload: item };
  }

  return {loadItems, saveItem, createItem, updateItem, deleteItem, selectItem};
}

export default ItemsActions;
