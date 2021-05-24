$(function () {
  var date = new Date().toISOString().slice(0, 10);;
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" + date + "&api_key=w0zbinyh09anfzvckgcd81bf6gtls2g40z7orhb1h9oxhmid3",
    "method": "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.word);
    $("#word").text(response.word);
    $("#description").text(response.definitions[0].text);
    $("#example").text(response.examples[0].text);
    $("#note_history").text(response.note);
    $("#verb").text(response.definitions[0].partOfSpeech);
  });
  var number = Math.floor(Math.random() * 1643);
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $("#quotes").text(data[number].text);
      $("#author").text(data[number].author);
    });
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  var date1 = new Date().toISOString().slice(0, 10);
  $('#date').text(n);
  $('#date1').text(date1);
});
$('#detailscontainer').hide();
$('#show').click(function () {
  $('#detailscontainer').show();
  $('#show').hide();
  $("#container1").css({ "opacity": "0.2" });
});
$('#close').click(function () {
  $('#detailscontainer').hide();
  $("#container1").css({ "opacity": "1" });
  $('#show').toggle();
});