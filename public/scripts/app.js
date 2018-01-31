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