


$( document ).ready(function() {
 $('#text-area').focus();
  getTweets()

//REVEAL OR HIDE THE CREATE TWEET BOX
$("#compose").click(function(){
        $(".new-tweet").slideToggle("slow");
        $('#text-area').focus();
    });

//THIS IS THE NEW TWEET
  function createTweetElement (tweetObj) {
    $tweet = $("<article>").addClass("tweet");
    let tweetTime = ""

    //THIS INNER FUNCTION GIVES IT A TIME STAMP...TIME SINCE POST....USES MOMENT
    tweetTime = moment(tweetObj.created_at).fromNow();
    console.log("tweet time " + tweetTime)

    let tweetInfo = `
          <header>
            <img class="avatar" src=${tweetObj.user.avatars.small}  >
            <span class="user-name"><b>${tweetObj.user.name}</b></span>
            <span class="user-handle">${tweetObj.user.handle}</span>
          </header>
        <p class="tweet-text">  ${escape(tweetObj.content.text)}</p>
       <footer>
         <p id="time-stamp" class="time-stamp"> ${tweetTime} </p>

          <actions class="user-tweet-response">
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </actions>
        </footer>
    `;
    $tweet = $tweet.append(tweetInfo);
    return $tweet;
  }
//THIS IS RENDERS THE TWEET INTO THE CONTAINER it empties the log after so you don't get repeat of past tweets posted
  function renderTweets(tweets) {
   const tweetLog = $('.tweets-container');
   tweetLog.empty()
    //prepend to render ontop of old tweets....append would be for bottom
   for(let tweet in tweets) {
    tweetLog.prepend(createTweetElement(tweets[tweet]));
   }
  }

//#2 1.a
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

  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }
//#3
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

//#1.b Discern appropriate ERROR message for empty tweet or too many characters
  function validateFormData (text) {
    console.log(text)
    let errorMessage = ""
     if(text == ""){
      errorMessage = "your tweet is empty"
     } else if (text.length > 140){
       errorMessage = "your tweet is too long"
     }
     return errorMessage
  }

//#1.a WHEN "submit" hit IF above #1.b error parameters not met info in TWEET  is turned into a text string in standard URL-encoded notation(".serialize") & sent to #2 POST Tweet
  $('#tweetbox').on('submit', function (event) {
    event.preventDefault();
    const formDataStr = $(this).find('#text-area').val()
    const errorMessage = validateFormData(formDataStr);
    console.log(errorMessage)
    if(errorMessage){
    $('#tweet-error').text(errorMessage)
    } else {
      postTweets($(this).serialize())
      $('#tweet-error').text("")
  }
 });

});




