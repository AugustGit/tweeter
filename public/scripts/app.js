


$( document ).ready(function() {
 $('#text-area').focus();
  getTweets()

$("#compose").click(function(){
        $(".new-tweet").slideToggle("slow");
        $('#text-area').focus();
    });


  function createTweetElement (tweetObj) {
    $tweet = $("<article>").addClass("tweet");
    let tweetInfo = `


          <header>
            <img class="avatar" src=${tweetObj.user.avatars.small}  >
            <span class="user-name"><b>${tweetObj.user.name}</b></span>
            <span class="user-handle">${tweetObj.user.handle}</span>
          </header>
        <p class="tweet-text">  ${escape(tweetObj.content.text)}</p>
       <footer>
         <p id="time-stamp" class="time-stamp">  </p>
          ${tweetObj.created_at}
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







