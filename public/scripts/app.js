/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {
 $.fn.log = function() {
    console.log.apply(console, this);
    return this;
  };
});

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function() {

   function createTweetElement (tweetObj) {

     var header = $("<header>")
    .append($("<span>").addClass("avatar").css('background-image', 'url(' + tweetData.user.avatars.small + ')'))
    .append($("<span>").addClass("user-name").text(tweetData.user.name))
    .append($("<span>").addClass("user-handle").text(tweetData.user.handle));

     let html = `
  <section class="treehouse" action="/tweets" method="post">
        <article>
          <header>
            <img class="avatar" src=${tweetObj.user.avatars.small}  >
            <span class="user-name" ><b>${tweetObj.user.name}</b></span>
            <span class="user-handle" >${tweetObj.user.handle}</span>
          </header>
          <section class="tweet-content">
            <p class="tweet-text">  ${tweetObj.content.text}</p>
              <footer>
                <p class="time-stamp">  </p>
                   ${tweetObj.created_at}
                 <actions class="user-tweet-response">
              <i class="fa fa-flag" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                 </actions>
              </footer>
          </section>
     `
     $tweet = $("<article>").addClass("tweet");
     return $tweet.append(html);
  }

   var $tweet = createTweetElement(tweetData);

   // Test / driver code (temporary)
   console.log($tweet); // to see what it looks like
   $('.treehouse').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
 });
/*
function iconIsert(iconClass) {
  return $("<span>").addClass("fa " + iconClass).attr("aria-hidden", "true");
}

function createTweetElement(tweetData) {
  var $tweet = $("<article>").addClass("tweet");
  var header = $("<header>")
    .append($("<span>").addClass("avatar").css('background-image', 'url(' + tweetData.user.avatars.small + ')'))
    .append($("<span>").addClass("user-name").text(tweetData.user.name))
    .append($("<span>").addClass("user-handle").text(tweetData.user.handle));
   $tweet.append(header);
   $tweet.append($("<p>").addClass("tweet-text").text(tweetData.content.text));
  /* var icons = $("<span>").addClass("actions")
     .append(iconInsert("fa-flag"))
     .append(iconInsert("fa-retweet"))
     .append(iconInsert("fa-heart"));
   var footer = $("<footer>")
     .append($("<span>").addClass("tweet-time").text("10 days agao"))
     //.append(icons);
   $tweet.append(footer);
   return $tweet;
 }
//
function renderTweets(data) {
  var treehouse = $('.treehouse');
  for(var i = 0; i < data.length; i++) {
    treehouse.append(createTweetElement(data[i]));
  }
}
(document).ready(function(){
   renderTweets(data);
  });
*/
  // Test / driver code (temporary)

