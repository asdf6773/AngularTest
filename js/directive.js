app.directive("search", [function() {
  return {
    restrict: "E",
    // scope:{
    //   type==
    // }
    // scope:true,
    template: " <div id='wrap'><form class='d2'>" +
      " <select id='select' ng-model='categroy' ng-options='tag.name for tag in "+"tags"+"' ng-change='selectedChange(categroy.name)'>" +
      "  </select>" +
      "        <input id='searchInput' type='text' placeholder='请输入...' ng-model='content'>" +
      "        <button id='searchButton' ng-click='search(category.name,content)' type='submit'></button>" +
      "  </form></div>" +
      "<ul class='tagWrap'>" +
      "<li class='tags' ng-repeat='type in typeArr track by $index'><span class='tag-type'>{{type.type}}:</span>{{type.content}}" +
      "<div class='close' ng-click='closeTag($index)'></div>" +
      "</li>" +
      "</ul>"
  }
}])
// <ul class="tagWrap">
//   <li class="tags" ng-repeat="type in typeArr track by $index"><span class=tag-type>{{type.type}}:</span>{{type.content}}
//     <div class="close" ng-click="closeTag($index)"></div>
//   </li>
// </ul>
