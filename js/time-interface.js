var alarms = [];

function startTime(){
  var time = moment().format('h:mm:ss a');

  document.getElementById('txt').innerHTML = time;

  setTimeout(startTime, 500);
}

function check(){
  if (alarms.length === 1){
    if (alarms[0].hour() === moment().hour() &&
        alarms[0].minute() === moment().minute() &&
        alarms[0].second() === moment().second()){
      document.getElementById('youTube').click();    
      console.log("ALARM IS GOING OFF");
    } else {
      console.log("not going off");
    }
  }
    setTimeout(check, 1000);
}


$(document).ready(function(){
 $('#txt').text(startTime());

 check();

  $('#alarmclock').submit(function(event){
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = $('#minute').val();
    var second = $('#second').val();
    var morningNight = $('#morningNight').val();
    console.log(hour);
    if (morningNight === "PM"){
      hour += 12;
    }
    var firstAlarm = moment().hours(hour).minutes(minute).seconds(second);
    console.log(firstAlarm);
    console.log(morningNight);
    alarms.push(firstAlarm);
  });
});
