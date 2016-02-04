import {items, selectedItem} from './items.reducers';

describe('Items', () => {
  describe('`items` store', () => {
    let initialState = [
      { id: 0, name: 'First Item' },
      { id: 1, name: 'Second Item' }
    ];

    it('returns an empty array by default', () => {
      let defaultState = items(undefined, {type: 'random', payload: {}});

      expect(defaultState).toEqual([]);
    });

    it('returns state for unregistered action', () => {
      let defaultState = items(initialState, {type: 'random', payload: {}});

      expect(defaultState).toEqual(initialState);
    });

    it('`ADD_ITEMS`', () => {
      let payload = initialState,
          stateItems = items([], {type: 'ADD_ITEMS', payload: payload});

      expect(stateItems).toEqual(payload);
    });

    it('`CREATE_ITEM`', () => {
      let payload = {id: 2, name: 'added item'},
          result = [...initialState, payload],
          stateItems = items(initialState, {type: 'CREATE_ITEM', payload: payload});

      expect(stateItems).toEqual(result);
    });

    it('`UPDATE_ITEM`', () => {
      let payload = { id: 1, name: 'Updated Item' },
          result = [ initialState[0], { id: 1, name: 'Updated Item' } ],
          stateItems = items(initialState, {type: 'UPDATE_ITEM', payload: payload});

      expect(stateItems).toEqual(result);
    });

    it('`DELETE_ITEM`', () => {
      let payload = { id: 0 },
          result = [ initialState[1] ],
          stateItems = items(initialState, {type: 'DELETE_ITEM', payload: payload});

      expect(stateItems).toEqual(result);
    });
  });

  describe('`selectedItem` store', () => {
    let initialState = { id: 0, name: 'First Item' };

    it('returns null by default', () => {
      let defaultState = selectedItem(undefined, {type: 'random', payload: {}});

      expect(defaultState).toBeNull();
    });

    it('returns state for unregistered action', () => {
      let defaultState = selectedItem(initialState, {type: 'random', payload: {}});

      expect(defaultState).toEqual(initialState);
    });

    it('`SELECT_ITEM` returns the provided payload', () => {
      let selectItem = selectedItem(undefined, {type: 'SELECT_ITEM', payload: 'payload'});

      expect(selectItem).toBe('payload');
    });
  });
});
