class ItemDetailController {
  constructor($ngRedux, $scope, ItemsActions) {
    'ngInject';
    let unsubscribe = $ngRedux.connect(this.mapStateToThis, ItemsActions)(this);

    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      selectedItem: state.selectedItem
    }
  }
}

export default ItemDetailController;
