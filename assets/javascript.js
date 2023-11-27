let Day1 = $('#Maincard')
let Day2 = $('#Subcard')
let Day3 = $('#Subcard1')
let Day4 = $('#Subcard2')
let Day5 = $('#Subcard3')
let Day6 = $('#Subcard4')
let btn = $('#sbutton')
let city = $('#City')
let Pbtn = $('.buttonss')
var userIn = [""];
if (JSON.parse(localStorage.getItem("past searches")) != null) {
    var PSbuttons = JSON.parse(localStorage.getItem("past searches"));
  } else {
    var PSbuttons = [];
  }



  $(document).ready(() => {
    var Pastsearches = JSON.parse(localStorage.getItem("past searches"));
    if (Pastsearches != null) {
      for (i = 0; i < Pastsearches.length; i++) {
        var button = $("<button></button>")
        .text(Pastsearches[i])
        .attr("id", Pastsearches[i])
        $(Pbtn).append(button);
      }
    }
})

btn.on("click", function () {
    if (city.val() == "") {
      return;
    }
fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city.val() + '&appid=6a970c425747b2ea5d6c4e9f0082f64f', {
    method: 'GET',
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (i = 0; i < userIn.length; i++) {
            if (city.val() == userIn[i] || city.val() == userIn[i].toUpperCase()) {
              var buttons = false;
              break;
            } else {
              var buttons = true;
            }
          }
          var buttonss = true;
          var Pastsearches = JSON.parse(localStorage.getItem("past searches"));
          if (Pastsearches != null) {
            for (i = 0; i < Pastsearches.length; i++) {
              if (city.val() == Pastsearches[i] || city.val() == Pastsearches[i].toUpperCase() ) {
                var buttonss = false;
                break;
              } else {
                var buttonss = true;
              }
            }
          }

         userIn.push(city.val().toLowerCase());

         var place = userIn.length - 1;
         if (buttons == true && buttonss == true) {
            var button = $("<button></button>")
        .text(userIn[place])
        .attr("id", userIn[place])
        $(Pbtn).append(button);
           PSbuttons.push(city.val().toLowerCase());
           localStorage.setItem("past searches", JSON.stringify(PSbuttons));
         } 


$("h4").remove();
let date = data.list[0].dt_txt.substr(0, 10)
var icon = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
var MDay = $("<h4>").text(data.city.name +" " + `(${date})`);
$(MDay).append(icon)
$(Day1).append(MDay)
let Temp = kelvin(data.list[0].main.temp).substr(0, 5)
let TempF = $('<h4>').text(`Temp: ${Temp}°F`)
$(Day1).append(TempF)
let wind = $('<h4>').text(`Wind: ${data.list[0].wind.speed}MPH`)
$(Day1).append(wind)
let Hum = $('<h4>').text(`Humidity: ${data.list[0].main.humidity}%`)
$(Day1).append(Hum)

let date1 = data.list[1].dt_txt.substr(0, 10)
var icon1 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`)
var MDay1 = $("<h4>").text(data.city.name +" " + `(${date1})`);
$(MDay1).append(icon1)
$(Day2).append(MDay1)
let Temp1 = kelvin(data.list[1].main.temp).substr(0, 5)
let TempF1 = $('<h4>').text(`Temp: ${Temp1}°F`)
$(Day2).append(TempF1)
let wind1 = $('<h4>').text(`Wind: ${data.list[1].wind.speed}MPH`)
$(Day2).append(wind1)
let Hum1 = $('<h4>').text(`Humidity: ${data.list[1].main.humidity}%`)
$(Day2).append(Hum1)

let date2 = data.list[9].dt_txt.substr(0, 10)
var icon2 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`)
var MDay2 = $("<h4>").text(data.city.name +" " + `(${date2})`);
$(MDay2).append(icon2)
$(Day3).append(MDay2)
let Temp2 = kelvin(data.list[9].main.temp).substr(0, 5)
let TempF2 = $('<h4>').text(`Temp: ${Temp2}°F`)
$(Day3).append(TempF2)
let wind2 = $('<h4>').text(`Wind: ${data.list[9].wind.speed}MPH`)
$(Day3).append(wind2)
let Hum2 = $('<h4>').text(`Humidity: ${data.list[9].main.humidity}%`)
$(Day3).append(Hum2)

let date3 = data.list[17].dt_txt.substr(0, 10)
var icon3 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`)
var MDay3 = $("<h4>").text(data.city.name +" " + `(${date3})`);
$(MDay3).append(icon3)
$(Day4).append(MDay3)
let Temp3 = kelvin(data.list[17].main.temp).substr(0, 5)
let TempF3 = $('<h4>').text(`Temp: ${Temp3}°F`)
$(Day4).append(TempF3)
let wind3 = $('<h4>').text(`Wind: ${data.list[17].wind.speed}MPH`)
$(Day4).append(wind3)
let Hum3 = $('<h4>').text(`Humidity: ${data.list[17].main.humidity}%`)
$(Day4).append(Hum3)

let date4 = data.list[25].dt_txt.substr(0, 10)
var icon4 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`)
var MDay4 = $("<h4>").text(data.city.name +" " + `(${date4})`);
$(MDay4).append(icon4)
$(Day5).append(MDay4)
let Temp4 = kelvin(data.list[25].main.temp).substr(0, 5)
let TempF4 = $('<h4>').text(`Temp: ${Temp4}°F`)
$(Day5).append(TempF4)
let wind4 = $('<h4>').text(`Wind: ${data.list[25].wind.speed}MPH`)
$(Day5).append(wind4)
let Hum4 = $('<h4>').text(`Humidity: ${data.list[25].main.humidity}%`)
$(Day5).append(Hum4)

let date5 = data.list[33].dt_txt.substr(0, 10)
var icon5 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`)
var MDay5 = $("<h4>").text(data.city.name +" " + `(${date5})`);
$(MDay5).append(icon5)
$(Day6).append(MDay5)
let Temp5 = kelvin(data.list[33].main.temp).substr(0, 5)
let TempF5 = $('<h4>').text(`Temp: ${Temp5}°F`)
$(Day6).append(TempF5)
let wind5 = $('<h4>').text(`Wind: ${data.list[33].wind.speed}MPH`)
$(Day6).append(wind5)
let Hum5 = $('<h4>').text(`Humidity: ${data.list[33].main.humidity}%`)
$(Day6).append(Hum5)
    })
})  

$(document).on("click", "button", function () {
    let id = $(this).attr("id");

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + id + '&appid=6a970c425747b2ea5d6c4e9f0082f64f', {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          $("h4").remove();
          let date = data.list[0].dt_txt.substr(0, 10)
          var icon = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
          var MDay = $("<h4>").text(data.city.name +" " + `(${date})`);
          $(MDay).append(icon)
          $(Day1).append(MDay)
          let Temp = kelvin(data.list[0].main.temp).substr(0, 5)
          let TempF = $('<h4>').text(`Temp: ${Temp}°F`)
          $(Day1).append(TempF)
          let wind = $('<h4>').text(`Wind: ${data.list[0].wind.speed}MPH`)
          $(Day1).append(wind)
          let Hum = $('<h4>').text(`Humidity: ${data.list[0].main.humidity}%`)
          $(Day1).append(Hum)
          
          let date1 = data.list[1].dt_txt.substr(0, 10)
          var icon1 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`)
          var MDay1 = $("<h4>").text(data.city.name +" " + `(${date1})`);
          $(MDay1).append(icon1)
          $(Day2).append(MDay1)
          let Temp1 = kelvin(data.list[1].main.temp).substr(0, 5)
          let TempF1 = $('<h4>').text(`Temp: ${Temp1}°F`)
          $(Day2).append(TempF1)
          let wind1 = $('<h4>').text(`Wind: ${data.list[1].wind.speed}MPH`)
          $(Day2).append(wind1)
          let Hum1 = $('<h4>').text(`Humidity: ${data.list[1].main.humidity}%`)
          $(Day2).append(Hum1)
          
          let date2 = data.list[9].dt_txt.substr(0, 10)
          var icon2 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`)
          var MDay2 = $("<h4>").text(data.city.name +" " + `(${date2})`);
          $(MDay2).append(icon2)
          $(Day3).append(MDay2)
          let Temp2 = kelvin(data.list[9].main.temp).substr(0, 5)
          let TempF2 = $('<h4>').text(`Temp: ${Temp2}°F`)
          $(Day3).append(TempF2)
          let wind2 = $('<h4>').text(`Wind: ${data.list[9].wind.speed}MPH`)
          $(Day3).append(wind2)
          let Hum2 = $('<h4>').text(`Humidity: ${data.list[9].main.humidity}%`)
          $(Day3).append(Hum2)
          
          let date3 = data.list[17].dt_txt.substr(0, 10)
          var icon3 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`)
          var MDay3 = $("<h4>").text(data.city.name +" " + `(${date3})`);
          $(MDay3).append(icon3)
          $(Day4).append(MDay3)
          let Temp3 = kelvin(data.list[17].main.temp).substr(0, 5)
          let TempF3 = $('<h4>').text(`Temp: ${Temp3}°F`)
          $(Day4).append(TempF3)
          let wind3 = $('<h4>').text(`Wind: ${data.list[17].wind.speed}MPH`)
          $(Day4).append(wind3)
          let Hum3 = $('<h4>').text(`Humidity: ${data.list[17].main.humidity}%`)
          $(Day4).append(Hum3)
          
          let date4 = data.list[25].dt_txt.substr(0, 10)
          var icon4 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`)
          var MDay4 = $("<h4>").text(data.city.name +" " + `(${date4})`);
          $(MDay4).append(icon4)
          $(Day5).append(MDay4)
          let Temp4 = kelvin(data.list[25].main.temp).substr(0, 5)
          let TempF4 = $('<h4>').text(`Temp: ${Temp4}°F`)
          $(Day5).append(TempF4)
          let wind4 = $('<h4>').text(`Wind: ${data.list[25].wind.speed}MPH`)
          $(Day5).append(wind4)
          let Hum4 = $('<h4>').text(`Humidity: ${data.list[25].main.humidity}%`)
          $(Day5).append(Hum4)
          
          let date5 = data.list[33].dt_txt.substr(0, 10)
          var icon5 = $('<img>').attr("src", `https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`)
          var MDay5 = $("<h4>").text(data.city.name +" " + `(${date5})`);
          $(MDay5).append(icon5)
          $(Day6).append(MDay5)
          let Temp5 = kelvin(data.list[33].main.temp).substr(0, 5)
          let TempF5 = $('<h4>').text(`Temp: ${Temp5}°F`)
          $(Day6).append(TempF5)
          let wind5 = $('<h4>').text(`Wind: ${data.list[33].wind.speed}MPH`)
          $(Day6).append(wind5)
          let Hum5 = $('<h4>').text(`Humidity: ${data.list[33].main.humidity}%`)
          $(Day6).append(Hum5)
      })
  })

function kelvin(a){
    return JSON.stringify((a-273.15) * 9/5 + 32)
}