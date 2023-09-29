var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function() {
  var arr = JSON.parse(request.response);
  var res = arr.forEach(function(ele) {
    console.log(ele.name.common);
    console.log(ele.capital);
    console.log(ele.flags.png);
  });
}