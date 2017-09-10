app.controller('SimpleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  $scope.tags = [{
    name: '机器名称',
    v: 'machine'
  }, {
    name: '管理员',
    v: 'admin'
  }, {
    name: 'ID',
    v: 'id'
  }];
  $scope.tags2 = [{
    name: '嘿嘿嘿',
    v: 'machine'
  }, {
    name: '嘻嘻嘻',
    v: 'admin'
  }, {
    name: '呵呵呵',
    v: 'id'
  }];
  var searchType;
  $scope.typeArr = [];
  $scope.search = (type, content) => {
    if ((searchType != undefined) && (content != undefined))
      $scope.pushSearchType(content)
  }
  $scope.selectedChange = function(v) {
    searchType = v;
    console.log('selectedChange: ', v);
  }
  $scope.getSearchType = () => {
    return $scope.typeArr;
  }
  $scope.pushSearchType = (content) => {
    $scope.typeArr.push({
      type: searchType,
      content: content
    });
    $scope.content = undefined;
    console.log($scope.typeArr)
  }
  $scope.closeTag = (index) => {
    $scope.typeArr.splice(index,1)
  }
}])

function aaa() {
  console.log("233232")
}
