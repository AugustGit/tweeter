


$( document ).ready(function() {
 $('#text-area').focus();
  getTweets()

$("#compose").click(function(){
        $(".new-tweet").slideToggle("slow");
        $('#text-area').focus();
    });


  function createTweetElement (tweetObj) {
    $tweet = $("<article>").addClass("tweet");
    let tweetTime = ""


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

  function renderTweets(tweets) {
   const tweetLog = $('.tweets-container');
   tweetLog.empty()

   for(let tweet in tweets) {
    tweetLog.prepend(createTweetElement(tweets[tweet]));
   }
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

  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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

/*

 1517707187759

  // time conversion constants
  var msMinute = 60 * 1000;
  var msHours = 60 * 60 * 1000;
  var msDay = 60 * 60 * 24 * 1000;

  // helper function for timeSince
  function formatDate(n, s) {
    return n.toString() + " " + s + (n > 1 ? "s" : "") + " ago";
  }

  // return a time since string for the givne time in milliseconds
  function timeSince(timeInMilliSeconds) {
    var now = new Date();
    var then = new Date(timeInMilliSeconds);
    var differenceInMilliSeconds = now - then;
    if (differenceInMilliSeconds < 0) {
      return "Just now";
    }
    var days = Math.floor(differenceInMilliSeconds / msDay);
    if(days) {
      return formatDate(days, "day");
    }
    var hours = Math.floor( (differenceInMilliSeconds % msDay) / msHours );
    if(hours) {
      return formatDate(hours, "hour");
    }
    var minutes = Math.floor( (differenceInMilliSeconds % msHours) / msMinute);
    if(minutes) {
      return formatDate(minutes, "minute");
    } else {
      return "Just now";
    }
  }


  function renderTweet(tweetData) {
    tweetData.time = timeSince(tweetObj.created_at);
    var tweet = $(tweetTemplate(tweetData))
      .prependTo(tweetsContainer);

  }

 var d = new Date(1469433907836);

d.toLocaleString(); // expected output: "7/25/2016, 1:35:07 PM"

d.toLocaleDateString(); // expected output: "7/25/2016"

d.toDateString();  // expected output: "Mon Jul 25 2016"

d.toTimeString(); // expected output: "13:35:07 GMT+0530 (India Standard Time)"

d.toLocaleTimeString(); // expected output: "1:35:07 PM"
  */







