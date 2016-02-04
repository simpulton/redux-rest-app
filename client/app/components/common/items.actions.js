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
    return (item.id) ? updateItem(item) : createItem(item);
  }

  let createItem = (item) => {
    return (dispatch) => {
      $http.post(`${BASE_URL}`, JSON.stringify(item))
        .then(res => res.data)
        .then(payload => ({ type: 'CREATE_ITEM', payload }))
        .then(action => dispatch(action));
    }
  }

  let updateItem = (item) => {
    delete item.$$hashKey;
    return (dispatch) => {
      $http.put(`${BASE_URL}${item.id}`, JSON.stringify(item))
        .then(action => dispatch({ type: 'UPDATE_ITEM', payload: item }));
    }
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

  let resetItem = () => {
    let emptyItem = {id: null, name: '', description: ''};
    return { type: 'SELECT_ITEM', payload: emptyItem };
  }

  return {loadItems, saveItem, createItem, updateItem, deleteItem, selectItem, resetItem};
}

export default ItemsActions;
