// https://api.openweathermap.org/data/2.5/weather?appid=bb48761281e34ab43d3d2a4a0af06707&units=metric&lang=kr&q=incheon

var url = "https://api.openweathermap.org/data/2.5/weather";
url += "?appid=bb48761281e34ab43d3d2a4a0af06707";
url += "&units=metric";
url += "&lang=kr";
url += "&q=";

// 현재 날씨의 모든 정보를 얻어옴
function getCurrentWeather(city) {
  var dataObj;
  var openWeatheAPI = url;

  $.ajax({ 
    type: "GET",
    url: openWeatheAPI += city,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function(data) {
      dataObj = data;
      console.log(dataObj);
    },
    error: function(req, status, err) {
      console.error("code: ", req.state);
      console.error("status: ", status);
      console.error("message: ", req.responseText);
      console.error("error: ", err);
    },
  });

  return dataObj;
}

// 현재 날씨 온도 얻어오기 
function getCurrentTemp(city) {
  var temp = {};
  var openWeatheAPI = url; // ?

  $.ajax({ 
    type: "GET",
    url: url + city,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function(data) {
      temp.celsius = Math.floor(data.main.temp); // 소숫점 버림
      temp.icon = data.weather[0].icon;
    },
    error: function(req, status, err) {
      console.error("code: ", req.state);
      console.error("status: ", status);
      console.error("message: ", req.responseText);
      console.error("error: ", err);
    },
  });

  return temp;
}