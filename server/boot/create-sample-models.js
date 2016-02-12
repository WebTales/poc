module.exports = function(app) {
  app.dataSources.mongo.automigrate('article', function(err) {
    if (err) throw err;
 
    app.models.article.create([
      {
    	  title: 'Mon article de test',
    	  workflow: [
    	  {"status" : "published", "nativeLanguage": "fr", "id":"draft", "state":"draft"},
    	  {"status" : "published", "nativeLanguage": "fr", "id":"live", "state":"draft"}
    	  ]
      }
    ], function(err, article) {
      if (err) throw err;
 
      console.log('Models created: \n', article);
    });
  });
};