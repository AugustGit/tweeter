
// A $( document ).ready() block.
$( document ).ready(function() {
  var newTweet = $(".new-tweet");
  var counter = newTweet.find(".tweet-char-counter");
  var textArea = newTweet.find("textArea");
    //console.log( "ready!" );
   var charRemaining = 140
   $('#text-area').on('keypress', function() {
    //console.log('#tweet-area')
     var tweetLength = $('#text-area').val().length;
     charRemaining  = 139 - tweetLength

     if(charRemaining >= 0){
       $(this).siblings(".tweet-char-counter").html(charRemaining)
       .css("color", "grey");
      } else {
       $(this).siblings(".tweet-char-counter").html(charRemaining)
      .css("color", "red");
    }
   });
});

/*
var input = document.getElementById('myInput');

input.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
        return false;
};*/
