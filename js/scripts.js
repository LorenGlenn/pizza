var newOrder;
function Order(name, street, city) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.toppings = [];
}

Order.prototype.checkout = function() {
  var fullAddress = this.name + ": located at: " + this.street + ", " + this.city + ".";
  var orderDetails = this.size + " pizza with " + this.sauce + ". Extra cheese?: " + this.extraCheese + " Toppings: " + this.toppings;
}

$(document).ready(function(){
  $('#submit').click(function(){
    var name = $('#name').val();
    var street = $('#street').val();
    var city = $('#city').val();
    newOrder = new Order(name, street, city);
    $('#welcome-form').hide();
    $('#size-section').show();
  });
  $('.size').click(function(){
    newOrder.cost = parseInt($(this).val());
    newOrder.size = $(this).text();
    $('#sauce-section').show();
  });
  $('.sauce').click(function(){
    newOrder.cost += parseInt($(this).val());
    newOrder.sauce = $(this).text();
    $('#cheese-section').show();
  });
  $('.cheese').click(function(){
    newOrder.cost += parseInt($(this).val());
    newOrder.extraCheese = $(this).text();
    $('#topping-section').show();
  });
  $('.topping').click(function(){
    newOrder.cost += parseInt($(this).val());
    newOrder.toppings.push($(this).text());
  });
});
