function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

function showDate() {
  var date = new Date()
  var month = date.toLocaleString("en-us", { month: "long" })
  var day = date.getDate()

  document.getElementById("todaysdate").innerHTML = " ~ " + month + " " + day + " ~ "
}

showDate();
