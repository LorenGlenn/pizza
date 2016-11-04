var newOrder;
function Order(name, street, city) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.toppings = [];
}

Order.prototype.details = function() {
  var orderDetails = this.size + " pizza with " + this.sauce + ". Extra cheese?: " + this.extraCheese + " Toppings: " + this.toppings;
  return orderDetails;
}

Order.prototype.address = function() {
  var fullAddress = this.name + ": located at: " + this.street + ", " + this.city + ".";
  return fullAddress;
}

$(document).ready(function(){
  $('#submit').click(function(){
    var name = $('#name').val();
    var street = $('#street').val();
    var city = $('#city').val();
    newOrder = new Order(name, street, city);
    $('#welcome-form').hide();
    $('#size-section').fadeIn();
  });
  $('.size').click(function(){
    newOrder.cost = parseInt($(this).val());
    newOrder.size = $(this).text();
    $('#sauce-section').fadeIn();
  });
  $('.sauce').click(function(){
    newOrder.cost += parseInt($(this).val());
    newOrder.sauce = $(this).text();
    $('#cheese-section').fadeIn();
  });
  $('.cheese').click(function(){
    newOrder.cost += parseInt($(this).val());
    newOrder.extraCheese = $(this).text();
    $('#topping-section').fadeIn();
  });
  $('.topping').click(function(){
    newOrder.cost += parseInt($(this).val());
    newOrder.toppings.push($(this).text());
  });
  $('#checkout').click(function(){
    $('#output').fadeIn();
    var orderDetails = newOrder.details();
    var fullAddress = newOrder.address();
    $('#location').append(fullAddress);
    $('#pizza-details').append(orderDetails);
    $('#total').append(newOrder.cost);
  })
});
