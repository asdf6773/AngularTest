// app.factory('SimpleFactory', $http => {
//   return {
//     getNews: (source) => {
//       return $http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=f0866c453b3343998dceb8a31cd9a7f7')
//
//     },
//     sources: ['the-next-web', 'al-jazeera-english', 'abc-news-au', 'ars-technica', 'associated-press']
//   }
// })
app.factory('DataFactory', () => {
  return {
    getSearchType: (SearchType) => {
      return SearchType;
    },
  }
})
