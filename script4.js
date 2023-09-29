var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    var arr = JSON.parse(request.response);
       var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }





