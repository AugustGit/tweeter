
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
    tweetLog.append(createTweetElement(tweets[tweet]));
   }
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
     $('#tweet-area').val('');
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
  $submit.on('submit', function (event) {
   console.log('Tweet submittted, calling ajax');
   event.preventDefault();
   var formDataStr = $(this).serialize();
   console.log($(this).serialize());
   postTweets(formDataStr)
 });
  getTweets()
});
