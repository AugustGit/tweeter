"use strict";

// Simulates the kind of delay we see with network or filesystem operations



module.exports = function makeDataHelpers(db) {
   let database = db
  return {

    // Saves a tweet to `db`
/*    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.tweets.push(newTweet);
        callback(null, true);
      });
    },

    saveTweet: function(newTweet, callback) {
       db.collection("tweets").insertOne(newTweet) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
      }
    }
*/
    getTweets: function(callback) {
    db.collection("tweets").find().toArray((err, tweets) => {
    if (err){
      return callback(err);
    }
   // console.log(callback)
    callback(null, tweets)

      });
    }


  };
}



/*
collections are selected with db.collection("collection-name") (not db.collection-name)


module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.tweets.push(newTweet);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, db.tweets.sort(sortNewestFirst));
      });
    }

  };
}



module.exports = function makeDataHelpers(db) {
const MONGODB_URI = "mongodb://localhost:27017/tweeter";


db.connect(MONGODB_URI, (err, db) => {
  if (err){
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

return {
// Get all tweets in `db`, sorted by newest first
getTweets: function(err,callback) {

  db.collection("tweets").find().toArray((err, callback) => {
    if (err){
      return callback(err);
    }
      callback(null, true);

         });
  }

}

db.close();

 });
}
*/
