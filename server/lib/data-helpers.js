"use strict";

module.exports = function makeDataHelpers(db) {
   let database = db
  return {

    saveTweet: function(newTweet, callback) {
      database.collection("tweets").insertOne(newTweet);
        callback(null, true)
      },

    getTweets: function(callback) {
      database.collection("tweets").find().toArray((err, tweets) => {
      if (err){
        return callback(err);
      }

      callback(null, tweets)
      });
    }
  };
}
