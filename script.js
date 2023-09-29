var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function() {
  var arr = JSON.parse(request.response);
  var res = arr.filter((ele) => ele.region === "Asia");
  console.log(res);
}