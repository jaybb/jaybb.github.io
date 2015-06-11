$( document ).ready(function() {
    console.log( "ready!" );


var paths = {
    head : 'M0,0v72h58.5v54c0,0-40.5,0-45,0S9,121.5,9,121.5v-36H0V135h67.5V63H9V9h49.5v40.5h9V0H0z',
	blob : 'M0,0v81h58.5v27c0,0-40.5,0-45,0S9,103.5,9,103.5v-18H0V135h67.5V54H9V27h49.5v22.5h9V0H0z',
    more : 'M0,0v81h36v27h-0.8c-3.7,0-3.7-4.4-3.7-4.4V85.5H0V135h67.5V54h-36V27H36v22.5h31.5V0H0z',
	yew  :  'M144,0v126c0,0-40.5,0-45,0s-4.5-4.5-4.5-4.5V0h-9v135H153V0H144z',
    yewtwo : 'M121.5,0v108c0,0,4.5,0,0,0s-4.5-4.5-4.5-4.5V0H85.5v135H153V0H121.5z'
    };


var svg = $('<svg xmlns="http://www.w3.org/2000/svg" >').css({ 
    width: '200px', 
    height: '200px' 
});
$('#logo').append( svg );
 

var paper = Snap( svg[0] );
 

var parts = {};
parts.head = paper.path( paths.head );
parts.yew = paper.path( paths.yew );







/*
//Hover animations
$('#logo').click (
    function(){
    //Hover in
    parts.head.animate({
        path : paths.blob
    }, 400);
    }
);
*/

$('#logo').click (function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    parts.head.animate({
        path : paths.more
    }, 800, mina.elastic );
    parts.yew.animate({
        path : paths.yew
    }, 800, mina.elastic );
     // odd clicks
  
  } else {
    parts.head.animate({
        path : paths.blob
    }, 800, mina.elastic );
    parts.yew.animate({
        path : paths.yewtwo
    }, 800, mina.elastic );
     // even clicks
  }
  $(this).data("clicks", !clicks);
});


/*
$('#logo').onClick(function(){
    //Hover in
    parts.head.animate({
        path : paths.blob
    }, 400);
}, function(){
    //Hover out
    parts.head.animate({
        path : paths.head
    }, 800, mina.elastic );
});
*/


});



/*
var clickFunk = funcion () {
    parts.head.transform('');
    parts.head.animate ({ 
        transform: 'r45,150,150' }, 1000, mina.bounce 
        ) ;
};

var endAnim = function() {
    parts.head.animate({ transform: 'r90,200,200' }, 2000, mina.bounce );
}

parts.head.click( clickFunk );
*/