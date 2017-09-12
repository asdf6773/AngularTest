app.controller('SimpleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  $scope.tags = ["ID","价格","描述","净含量","单位","添加日期","更新日期","图片"];

  $scope.machineType = [{
    name: 't1',
    v: 'machine'
  }, {
    name: 't2',
    v: 'admin'
  }, {
    name: 't3',
    v: 'id'
  }];
  $scope.status = [{
    name: 's1',
  }, {
    name: 's2',
  }, {
    name: 's3',
  }];
  $scope.version = [{
    name: 'v1',
  }, {
    name: 'v2',
  }, {
    name: 'v3',
  }];

  $scope.getData = () => {
    DataFactory
      .getProductData().then(response => {
        console.log( response.data.data)
        if (response.status == "200") {
          $scope.data = response.data.data
        }
      })
  }
  $scope.getData()
  // $scope.data = [{
  //   id: '0001',
  //   name:'PKU0001',
  //   address:'building01',
  //   machineName:'零食机',
  //   version:'1.0',
  //   storage:'100/300',
  //   sku:'30/40',
  //   status:'缺货',
  //   activTime:'2017/7/28 11:24:22',
  //   operation:'发送上货提醒',
  // }, {
  //   id: '0002',
  //   name:'PKU0002',
  //   address:'building01',
  //   machineName:'零食机',
  //   version:'1.0',
  //   storage:'100/300',
  //   sku:'30/40',
  //   status:'缺货',
  //   activTime:'2017/7/28 11:24:22',
  //   operation:'发送上货提醒',
  // }, {
  //   id: '0003',
  //   name:'PKU0003',
  //   address:'building02',
  //   machineName:'零食机',
  //   version:'1.0',
  //   storage:'100/300',
  //   sku:'30/40',
  //   status:'缺货',
  //   activTime:'2017/7/28 11:24:22',
  //   operation:'发送上货提醒',
  // }];
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
    $scope.typeArr.splice(index, 1)
  }
}])

function aaa() {
  console.log("233232")
}
