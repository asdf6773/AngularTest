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
  var searchType;
  $scope.typeArr = [];
  $scope.search = (type, content) => {
    if ((content != undefined) && (searchType != undefined))
      $scope.pushSearchType(content)
      document.getElementById("searchInput").value='';
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
    console.log($scope.typeArr)
  }
  $scope.closeTag = () => {

  }
}])

function aaa() {
  console.log("233232")
}
