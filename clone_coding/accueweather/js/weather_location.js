// console.log(location);
var currentUrl = location.href;
var urlObj = new URL(currentUrl);
var params = urlObj.searchParams; 
var q = params.get("q");
// console.log(urlObj);

var result = getCurrentWeather(q);
// console.log(result);

$("#temp").text(result.main.temp + "℃");
$("#wind").text(result.wind.speed + "m/s");
$("#humidity").text(result.main.humidity + "%");
