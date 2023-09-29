var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    var arr = JSON.parse(request.response);
    var res = arr.reduce((acc,ele)=>acc+ele.population,0);
    console.log(res);

}


