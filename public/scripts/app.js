


$( document ).ready(function() {
  function createTweetElement (tweetObj) {
    $tweet = $("<article>").addClass("tweet");
    let tweetInfo = `
    <section class="tweets-container" action="/tweets" method="post">
    <article class="tweet">
    <header>
    <img class="avatar" src=${tweetObj.user.avatars.small}  >
    <span class="user-name"><b>${tweetObj.user.name}</b></span>
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
    <div class="tweet-buffer"></div>
    `;
    $tweet = $tweet.append(tweetInfo);
    return $tweet;
  }

  function renderTweets(tweets) {
   clearTweets()
   const tweetLog = $('.tweets-container');
   for(let tweet in tweets) {
    tweetLog.prepend(createTweetElement(tweets[tweet]));
   }
  let textArea = $('#text-area')
   textArea.append(null);
  }

  function clearTweets(){
    const tweetLog = $('.tweets-container');
    tweetLog.empty()

  }

  function postTweets(formDataStr){
   $.ajax({
    url: `/tweets`,
    method: 'POST',
    data: formDataStr,
    success: function () {
     $('#text-area').val('');
      getTweets()
              }
   })
  }

  function getTweets(){
    $.ajax({
      url: `/tweets`,
      method: 'GET',
      success: function (data) {
        console.log(data)
        renderTweets(data);
      }
    });
  }

  var $submit = $('#tweetbox');
//console.log($('#tweetbox'))
/*n.fn.init [form#tweetbox.tweetbox, context: document, selector: "#tweetbox"]
0:form#tweetbox.tweetbox
  0:textarea#text-area.text-area
    accessKey:""
    assignedSlot:null
*/
  $submit.on('submit', function (event) {
   event.preventDefault();
    var formDataStr = $(this).serialize();
var splits = formDataStr.split("=")
console.log(splits[1] )
if(splits[1] == ""){
  alert("your tweet is empty")
  console.log("tweet is empty")
  return
} else if (splits[1].length > 140){
alert("your tweet is too long")
console.log("tweet too long")
return
} else {
   postTweets(formDataStr)
 return
  }
 });
  getTweets()
});

/*
function isTweetValid() {
   var count = $(".tweet-char-counter")
    if(count = 0) {
      event.preventDefault();
      $('#tweet-error').append("your tweet is empty");
   } else if (count  > 140) {
    event.preventDefault();
      $('#tweet-error').append("tweet must be less than 140 characters")
    } else {
    var $submit = $('#tweetbox');
    $submit.on('submit', function (event) {
        event.preventDefault();
        var formDataStr = $(this).serialize();
        postTweets(formDataStr)
        });
      }
*/