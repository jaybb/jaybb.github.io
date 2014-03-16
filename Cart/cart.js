  function showItem(name, quantity, price) {
    var item = $("<div class='item'>");
    
    item.append( $("<div class='name'>").text(name) );
    item.append( $("<div class='price'>").text(quantity + " X $" + price + "=") );
    item.append( $("<div class='subtotal''>").text("$" + (quantity * price)) );    
    
    $(".cart").append(item);
  }
  
  showItem("Shirt",5,20);
  showItem("Shoes",2,10);
  showItem("Pants",2,40);

