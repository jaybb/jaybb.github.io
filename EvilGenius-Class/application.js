function showProduct(name) {
	var robot = Robots[name];
		$(".overlay").show();
		$(".details").show();

		$("#detail-title").text(robot.title);
 		 $("#detail-description").text(robot.description);
 		 $("#detail-subtitle").text(robot.subtitle);
 		 $("#detail-price").text("$" + robot.price);
 		 $("#detail-image").attr("src", robot.image);
	 

	 	$("#add-to-cart").on("click",function(){
		 var quantity = parseInt ($(	"#detail-quantity").val()	);
		 addItem(name, quantity)
  });
}


function hideProduct() {
$(".overlay").hide();
$(".details").hide();
 $("#add-to-cart").off("click");

}

var cart = { };

function addItem (name, quantity){
	if(!cart[name]) { cart [name] = 0;}
	cart [name] += quantity;
	updateCart()
}


function updateCart (){
	var total = 0;

		for(var name in cart) {
			var quantity = cart[name];
			var robot = Robots[name];
			var price = robot.price;
			var itemPrice = robot.price*quantity;
			total += itemPrice;
  }

  $("#cart").text("Cart" + ": $" + total.toFixed(2));
	
}






// when page loads add in the event handlers

$(function() {


$(".product").click(function(){

var name = $(this).data ("product-id")
	showProduct(name);
  });

$(".overlay").click(function(){
hideProduct();
  });

});