// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){
 
            
(function($){
    
    var el = $('.e');
    var animationLength = 1000;
    var duration = el.length * animationLength + animationLength;
    var clearAfter = 100;
    var animation;
    
    function fadeNext(collection){
        collection.eq(0).fadeIn(animationLength, function(){
            (collection=collection.slice(1)).length 
            && fadeNext(collection)
        });
    }
    
    function play(){
        fadeNext(el);
        animation = setTimeout(function(){
            el.hide();
            play();
        }, duration);
    }
    play();
    
    setTimeout(function(){
         clearTimeout(animation);   
    }, duration * clearAfter);
})(jQuery)

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
});
