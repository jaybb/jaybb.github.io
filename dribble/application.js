    // Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
$(function (){

   
  //getting the data from dribble.com 
  $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
    
      console.log(data);
     
      //the loop
    for(var i=0;i<data.shots.length;i++) {
      var shot = data.shots[i] 
      var post = $("<div class='post'>");


    } 


  }); //closes out the $get json function

}); //closes out the original anonomyous function 
    function createShot(shot) {
      var post = $("<div class='post1'>")

      var title = $("<div>").text(shot.title);
      var thumb = $("<img class='thumbimg'>").attr("src",shot.image_teaser_url);
      var postTitle = $("<div class='title'>").text(shot.title);
      var author = $("<div class='author'>").text("Author: " + shot.player.name);
      var likes = $("<div class='likesNumber'>").text(shot.likes_count + " likes")

      
      post.append(thumb);
      post.append(title);
      post.append(author);
      post.append(likes);

      $("#shots").append(post);


      thumb.on("click",function() {
        var detail = $("<div class='fulldetail'>")

        var img = $("<img>").attr("src",shot.image_url);
        var comments = $("<div class='comment'>").text("Comments: " + shot.comments_count);
        var name = $("<div class='name'>").text("Name: " +shot.player.name);
        var username = $("<div class='username'>").text("Username: " +shot.player.username);
        var location = $("<div class='location'>").text("Location " + shot.player.location);
        var twittername = $("<div class='twittername'>").text("Twitter Name: " +shot.player.twitter_screen_name);

        detail.append(img);
        detail.append(comments);
        detail.append(name);
        detail.append(username);
        detail.append(location);
        detail.append(twittername);


        $("#detail").empty().append(detail);
        $("html, body").animate({ scrollTop: 0 }, "slow");


      });
    }
    
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      for(var i=0;i<data.shots.length;i++) {
        // We need to save the current shot for later 
        createShot(data.shots[i]);        
      }
    });