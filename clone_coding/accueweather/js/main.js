// getCurrentWeather("incheon");
// 아이콘 참고 - https://openweathermap.org/weather-conditions

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(".temp").each(function(i) {
  var temp = getCurrentTemp(cityList[i]);
  console.log(temp);
  var iconUrl = "http://openweathermap.org/img/wn/";

  // if (cityList[i] === "incheon") temp.icon = "01d";

  $(this).text(temp.celsius + "℃");
  $(this).prev().children().attr("src", iconUrl + temp.icon + ".png");
});

$(".location").on("click", function() {
  var q = $(this).children(".q").attr("id");
  var redirectUrl = "pages/weather_location.html?q=" + q;
  location.href = redirectUrl;
});