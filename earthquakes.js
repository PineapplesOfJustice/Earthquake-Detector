function displayQuakes(data) {
  var noRepeat = [];
  var repeated;
var random;
  document.getElementById("earthquakelist").innerHTML = "";
  for(var run=0; run<3; run++){
    do{  
      repeated = 0;  
      random = Math.floor(Math.random()*(data.features.length));
      for(var i=0; i<noRepeat.length; i++){
        if(noRepeat[i] == random){repeated = 1;}
      }
    }while(repeated == 1)
    noRepeat.push("random");  
    document.getElementById("earthquakelist").innerHTML += "<br>" + (run+1) + ". " + data.features[random].properties.place + "<br>(";
    var date = new Date(data.features[random].properties.time);
    var month = date.toLocaleString("en-us", { month: "long" });
    var day = date.getDate();
    document.getElementById("earthquakelist").innerHTML += month + " " + day + "): ";
    document.getElementById("earthquakelist").innerHTML += data.features[random].properties.mag + "mag<br>";  
  }
}

function getAJAX() {
  $.ajax({
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
    success: function(data) {
      displayQuakes(data);
    }
  })
}
