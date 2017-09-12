app.directive("search", [function() {
  return {
    restrict: "E",
    // scope:{
    //   type==
    // }
    // scope:true,
templateUrl: './search.html'
  }
}])
// <ul class="tagWrap">
//   <li class="tags" ng-repeat="type in typeArr track by $index"><span class=tag-type>{{type.type}}:</span>{{type.content}}
//     <div class="close" ng-click="closeTag($index)"></div>
//   </li>
// </ul>
