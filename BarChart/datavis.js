    // Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
$(function (){

   
  //getting the data from salaries.js  
      console.log(data);
     
      //the loop
    for(var i=0;i<data.length;i++) {
        var columns = data[i] 
        var container = $("<div class='container'>");
        var salary = parseFloat(data[i][18]);

        
        $("#list").append(container);
        
      var name = $("<div class='name'>").text(data[i][8]);
      var salarydiv = $("<div class='salary'>");
      var width = salary / 100;



       $(container).append(name);
       $(container).append(salarydiv);
       $(container).append(width);
       salarydiv.css("width",width);


    }
    


}); //closes out the original anonomyous function 


[9] //name
[18] //salary

//convert the string into a number using parsefloat 
//divide by 1000
//.css, width,