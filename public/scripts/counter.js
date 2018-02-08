
$( document ).ready(function() {

   var charRemaining = 140
   $('#text-area').on('input change', function() {

     var tweetLength = $('#text-area').val().length;
     charRemaining  = 140 - tweetLength

     if(charRemaining >= 0){
       $(this).siblings(".tweet-char-counter").html(charRemaining)
       .css("color", "grey");
      } else {
       $(this).siblings(".tweet-char-counter").html(charRemaining)
      .css("color", "red");
    }
   });
});
