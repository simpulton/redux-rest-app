class ItemsListController {
  constructor($ngRedux, $scope, ItemsActions) {
    'ngInject';

    let unsubscribe = $ngRedux.connect(this.mapStateToThis, ItemsActions)(this);
    this.loadItems();

    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      items: state.items,
      selectedItem: state.selectedItem
    }
  }
}

export default ItemsListController;
