    // Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
$(function (){

   
	//getting the data from dribble.com 
	$.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
    
    	console.log(data);
     
      //the loop
    for(var i=0;i<data.shots.length;i++) {
   	 	var shot = data.shots[i] 

   	 	var postDiv = $("<div class='post'>");


   	 	var postImage = $("<img class='postImage'>").attr("src",shot.image_teaser_url)
   	 	postDiv.append(postImage)

   	 	var postTitle = $("<div class='postTitle'>").text(shot.title)
   	 	postDiv.append(postTitle)
   	 	
   	 	var author = $("<div class='author'>").text(shot.player.name)
   	 	postDiv.append(author)

      var likes = $("<div class='likes'>").text(shot.likes_count + " likes")
      postDiv.append(likes)
            ;

   	 	// other stuff here
   	 	//"http://d13yacurqjgara.cloudfront.net/users/13774/screenshots/1497598/wired_atlanta_teaser.jpg"

   	 	$("#shots").append(postDiv);

    } 


	}); //closes out the $get json function

function showDetails () {
  $(".overlay").show();
  $("details").show();
    }


function hideDetails () {
  $(".overlay").hide();
  $(".details").hide();
};


 //$function () {
 // $(".post").click(function (){
 //   showDetails();
 // });

// $(".overlay").click(function(){
//    hideDetails()
//  }



}); //closes out the original anonomyous function 






//ok ultra basic but that ^ establishes were showing and hiding and below actually makes it happen
//when the page loads 






