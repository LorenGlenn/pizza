function Order(name, street, city) {
  this.name = name;
  this.street = street;
  this.city = city;
}



$(document).ready(function(){
  $('#submit').click(function(){
    var name = $('#name').val();
    var street = $('#street').val();
    var city = $('#city').val();
    var newOrder = new Order(name, street, city);
    console.log(newOrder);
  });
});
