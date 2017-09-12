// app.factory('SimpleFactory', $http => {
//   return {
//     getNews: (source) => {
//       return $http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=f0866c453b3343998dceb8a31cd9a7f7')
//
//     },
//     sources: ['the-next-web', 'al-jazeera-english', 'abc-news-au', 'ars-technica', 'associated-press']
//   }
// })
app.factory('DataFactory', $http => {
  return {
    getProductData: () => {
      var data = $http.get('http://192.168.1.188/api/products')
      // console.log(data)
         return data

       },
    getSearchType: (SearchType) => {
      return SearchType;
    },
  }
})
