// NOTE: create interval for sun and moon;
// start sun/moon interval by assigning translate class on click so it starts at same time
// remember to reset sun/moon when click again

var $dayName = $('#day'),
	dayMil = 24 * 60 * 60 * 1000; // dayMil is the number of milliseconds in a full day
	multiplierForDemo = 1 / (60 * 60), // 24 seconds = 24 hours
	sunCycleTimer = null,
	moonCycleTimer = null,
	dayNameTimer = [],
	lightTimer = [],
	lightData = {
		"monday": {
			"001": [
				{
					"eventTime": "06:30",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "07:30",
					"event": "off"
				},
				{
					"eventTime": "17:20",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "19:50",
					"event": "off"
				}
			],
			"002": [
				{
					"eventTime": "07:00",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "07:30",
					"event": "off"
				},
				{
					"eventTime": "18:00",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "21:00",
					"event": "off"
				},
				{
					"eventTime": "22:30",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "23:00",
					"event": "off"
				}
			],
			"003": [
				{
					"eventTime": "17:00",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "20:30",
					"event": "off"
				}
			]
		},
		"tuesday": {
			"001": [
				{
					"eventTime": "07:00",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "07:30",
					"event": "off"
				},
				{
					"eventTime": "18:00",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "21:00",
					"event": "off"
				},
				{
					"eventTime": "22:30",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "23:00",
					"event": "off"
				}
			],
			"002": [
				{
					"eventTime": "06:30",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "07:30",
					"event": "off"
				},
				{
					"eventTime": "17:20",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "19:50",
					"event": "off"
				}
			],
			"003": [
				{
					"eventTime": "17:00",
					"event": "on",
					"dim": 100
				},
				{
					"eventTime": "20:30",
					"event": "off"
				}
			]
		}
	};

function toMilliseconds(strMilitaryTime) {
	//translate military time to milliseconds via hh*60*60*1000 + mm*60*1000
	var timeSplit = strMilitaryTime.split(":"),
		eventMill = (parseInt(timeSplit[0]) * 60 * 60 * 1000) + (parseInt(timeSplit[1]) * 60 * 1000);
	return eventMill;
}

function sunCycle() {
	var $suns = $('#SUN polygon'),
		currSun = 19;
	sunCycleTimer = window.setInterval(function () {
		$suns.attr('class','');
		$suns.eq(currSun).attr('class','active');
		currSun = (currSun < 23) ? (currSun += 1) : 0;
		//hide all and show eq(i) sun polygon
	}, dayMil / 24 * multiplierForDemo);
}

function moonCycle() {
	var $moons = $('#MOON path'),
		currMoon = 7;
	moonCycleTimer = window.setInterval(function () {
		$moons.attr('class','');
		$moons.eq(currMoon).attr('class','active');
		currMoon = (currMoon < 23) ? (currMoon += 1) : 0;
		//hide all and show eq(i) sun polygon
	}, dayMil / 24 * multiplierForDemo);
}

$('#testButton').on('click', function (evt) {
	var $moons = $('#MOON path'),
		dayNum = 0; // 0 = Monday
	// initialize timers
	window.clearInterval(sunCycleTimer);
	window.clearInterval(moonCycleTimer);
	for(var i=0; i < dayNameTimer.length; i+=1) {
	    clearTimeout(dayNameTimer[i]);
	}
	for(var i=0; i < lightTimer.length; i+=1) {
	    clearTimeout(lightTimer[i]);
	}
	// start the sunCycle interval
	$moons.attr('class','');
	$moons.eq(6).attr('class','active');
	sunCycle();
	moonCycle();
	// start the 24 hour clock to change the day name
	Object.keys(lightData).forEach(function(dayName, d) {
		dayNameTimer.push(window.setTimeout(function () {
			$dayName.text(dayName);
		}, dayMil * d * multiplierForDemo));
	});
	// then create timeouts for each lighting event
	$.each(lightData, function(day, lights) {
		$.each(lights, function(lightId, lightEvents) {
			Object.keys(lightEvents).forEach(function(propertyName, i) {
				var eventTime = toMilliseconds(lightEvents[i].eventTime);
					waitTime = (eventTime + (dayNum * dayMil)) * multiplierForDemo;
			    lightTimer.push(window.setTimeout(function () {
			    	$('[data-id="' + lightId + '"]').attr('data-status', lightEvents[propertyName].event);
			        console.log(lightEvents[propertyName].eventTime + ': light ' + lightId + ': ' + lightEvents[propertyName].event);
			    }, waitTime));
			});
		});
		dayNum += 1;
	});
});










