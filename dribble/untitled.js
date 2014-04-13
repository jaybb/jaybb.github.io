
    // Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
$(function (){

   
  //getting the data from dribble.com 
  $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
    
      console.log(data);
     
      //the loop
      for(var i=0;i<data.shots.length;i++) {
      var shot = data.shots[i] ;
      } 

  }); //closes out the $get json function

}); //closes out the original anonomyous function 



   
    function createShot(shot) {
      var title = $("<div class='title'>").text(shot.title)
      var thumbnail = $("<img>").attr("src",shot.img_teaser_url)
      var title = $("<div class='grid'>").text(shot.title)
      var title = $("<div class='grid'>").text(shot.title)

      ;
      
      $("#shots").append(title)
      $("#shots").append(thumbnail);

      title.on("click",function() {

        var img = $("<img class='bigImg'>").attr("src",shot.image_url)
        $("#detail").empty().append(img)
        var author = $("<div class='author'>").text("Author: " + shot.player.name)
        $("#detail").append(author)
        var likesCount = $("<div class='likesCount'>").text("Likes: " + shot.likes_count)
        $("#detail").append(likesCount)
        var title = $("<div class='title'>").text("Title: " + shot.title)
        $("#detail").append(title)


        ;


      });
    };
    
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      for(var i=0;i<data.shots.length;i++) {
        // We need to save the current shot for later 
        createShot(data.shots[i]);        
      }
    });




//ok ultra basic but that ^ establishes were showing and hiding and below actually makes it happen
//when the page loads 






