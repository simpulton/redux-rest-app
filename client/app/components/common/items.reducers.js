//-------------------------------------------------------------------
// ITEMS STORE
//-------------------------------------------------------------------
const items = (state = [], {type, payload}) => {
  let index: number;
  switch (type) {
    case 'ADD_ITEMS':
      return payload;
    case 'CREATE_ITEM':
      return [...state, payload];
    case 'UPDATE_ITEM':
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};

//-------------------------------------------------------------------
// SELECTED ITEM STORE
//-------------------------------------------------------------------
const selectedItem = (state = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_ITEM':
      return payload;
    default:
      return state;
  }
};

export default { items, selectedItem };
