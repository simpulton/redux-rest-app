class ItemDetailController {
  constructor($ngRedux, $scope, ItemsActions) {
    'ngInject';
    let unsubscribe = $ngRedux.connect(this.mapStateToThis, ItemsActions)(this);

    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      selectedItem: Object.assign({}, state.selectedItem)
    }
  }

  save(item) {
    this.saveItem(item);
    this.resetItem();
  }
}

export default ItemDetailController;
