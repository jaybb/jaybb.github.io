function showProduct (product) {
	var sneakers = Sneakers[product];
	$(".overlay").show();
	$(".details").show();
		


	$("#detail-title").text(sneakers.title);
 	$("#detail-description").text(sneakers.description);
 	$("#detail-price").text("$" + sneakers.price);
 	$("#detail-image").attr("src", sneakers.image);	

	 $("#add-to-cart").on("click",function(){
	 var quantity = parseInt ($(	"#detail-quantity").val()	);
	 addItem(product, quantity)
  });
}



function hideProduct () {
	$(".overlay").hide();
	$(".details").hide();
	$("#add-to-cart").off("click");
}

var cart = { };

function addItem (product, quantity){
	if(!cart[product]) { cart [product] = 0;}
	cart [product] += quantity;
	updateCart()
}

function updateCart (){
	var total = 0;

		for(var product in cart) {
			var quantity = cart[product];
			var sneakers = Sneakers[product];
			var price = sneakers.price;
			var itemPrice = sneakers.price*quantity;
			total += itemPrice;
  }

    $("#cart").text("Cart" + ": $" + total.toFixed(2));

    return total;
	
}

function checkOut() {
  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';

  var description = $("#cart").text();
  var amount = updateCart() * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'images/tinythumb.gif',
    token: function(token, args) {
      $.post("/buy", {
        token: token.id,
        amount: amount,
        description: description
      },function(data) {
        alert(data.message);
      });
    }
  });


  handler.open({
    name: 'Minimal Kicks',
    description: description,
    amount: amount
  });

}




    //checkout to click on cart

//when the page loads add in our event handlers 

$(function() {

  $(".product").click(function(){
    var product = $(this).data ("product-id")
    showProduct(product);
  });

  $(".overlay").click(function(){
    hideProduct();
  });

  $("#cart").click(function(){
  	checkOut();
  });

});