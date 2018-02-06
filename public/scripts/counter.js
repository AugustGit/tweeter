
// A $( document ).ready() block.
$( document ).ready(function() {

    //console.log( "ready!" );
   var charRemaining = 140
   $('#text-area').on('input change', function() {
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
