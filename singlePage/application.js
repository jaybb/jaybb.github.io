function showProduct() {
$(".overlay").show();
$(".details").show();
}


function hideProduct() {
$(".overlay").hide();
$(".details").hide();
}

$(function() {


$(".sneakerObject").click(function(){
showProduct();
  });

$(".overlay").click(function(){
hideProduct();
  });

});
