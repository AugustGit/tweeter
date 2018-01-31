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

function
$( document ).ready(function() {
  console.log( "ready!" );

var $tweet =$('.teehouse'.addClass("tweet");


function createTweetElement( )

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
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
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {pv l;
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function iconInsert(iconClass) {
 +  return $("<span>").addClass("fa " + iconClass).attr("aria-hidden", "true");

function createTweetElement(tweetData) {
  var $tweet = $("<article>").addClass("tweet");
  var header = $("<header>")
    .append($("<img>").addClass("avatar").css('background-image', 'url(' + tweetData.user.avatars.small + ')'))
    .append($("<span>").addClass("user-name").text(tweetData.user.name))
    .append($("<span>").addClass("user-handle").text(tweetData.user.handle));
   $tweet.append(header);
   $tweet.append($("<p>").addClass("tweet-text").text(tweetData.content.text));
   var actions = $("<span>").addClass("actions")
     .append(iconInsert("fa-flag"))
     .append(iconInsert("fa-retweet"))
     .append(iconInsert("fa-heart"));
   var footer = $("<footer>")
     .append($("<span>").addClass("tweet-time").text("10 days agao"))
     .append(actions);
   $tweet.append(footer);
   return $tweet;
 }

var $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
