// NOTE: create interval for sun and moon;
// start sun/moon interval by assigning translate class on click so it starts at same time
// remember to reset sun/moon when click again

var $dayName = $('#day'),
	$suns = $('#SUN polygon'),
	$moons = $('#MOON path'),
	dayMil = 24 * 60 * 60 * 1000; // dayMil is the number of milliseconds in a full day
	multiplierForDemo = 1 / (60 * 60), // 24 seconds = 24 hours
	window.sunCycleTimer = null,
	window.moonCycleTimer = null,
	window.dayNameTimer = [],
	window.lightTimer = [],
	lightData = {
		"4light": {
			"Monday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "00:30:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:00:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:31:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:30:07"
				    }
				],
				"002": [
				],
				"003": [
				    {
				     "type": "turn_on",
				     "time": "00:30:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:11"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:04:14"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:04:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:04:13"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:06:14"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:15:15"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:15:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:22:43"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:24:43"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:34:13"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:36:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:00:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:00:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:00:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:00:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:09:46"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:09:46"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:09:47"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:11:47"
				    },
				    {
				     "type": "turn_on",
				     "time": "07:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "07:00:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "11:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "11:15:06"
				    },
				    {
				     "type": "turn_on",
				     "time": "13:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "13:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "17:00:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "17:07:54"
				    },
				    {
				     "type": "turn_on",
				     "time": "18:40:32"
				    },
				    {
				     "type": "turn_off",
				     "time": "18:42:30"
				    },
				    {
				     "type": "turn_on",
				     "time": "19:00:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "19:15:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:45:07"
				    }
				],
				"004": [
				    {
				     "type": "turn_on",
				     "time": "00:30:14"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:16"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:16"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:06:16"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:08:17"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:19:26"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:21:27"
				    },
				    {
				     "type": "turn_on",
				     "time": "03:26:15"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:28:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:12"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				]
			},
			"Tuesday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "00:30:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:30:06"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:45:09"
				    }
				],
				"002": [
				],
				"003": [
				    {
				     "type": "turn_on",
				     "time": "01:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "00:30:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:00:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "07:00:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "07:15:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "11:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "11:00:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "11:00:10"
				    },
				    {
				     "type": "turn_off",
				     "time": "11:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "13:00:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "13:00:03"
				    },
				    {
				     "type": "turn_on",
				     "time": "17:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "17:15:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "18:46:32"
				    },
				    {
				     "type": "turn_off",
				     "time": "18:48:32"
				    },
				    {
				     "type": "turn_on",
				     "time": "19:00:10"
				    },
				    {
				     "type": "turn_off",
				     "time": "19:00:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "19:00:10"
				    },
				    {
				     "type": "turn_off",
				     "time": "19:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:45:07"
				    }
				],
				"004": [
				    {
				     "type": "turn_on",
				     "time": "00:30:13"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:14"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:14"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "07:00:15"
				    },
				    {
				     "type": "turn_off",
				     "time": "07:02:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:03"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:02"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:02"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:03"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:45:04"
				    }
				]
			},
			"Wednesday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "00:30:08"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:00:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:03"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:03"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:03"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:04"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:45:05"
				    }
				],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "04:13:27"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:53:20"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:54:51"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				],
				"003": [
				    {
				     "type": "turn_on",
				     "time": "00:30:02"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:03"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:02"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:03"
				    },
				    {
				     "type": "turn_on",
				     "time": "04:30:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "04:30:10"
				    },
				    {
				     "type": "turn_on",
				     "time": "04:30:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "04:32:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:00:12"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:00:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "05:00:13"
				    },
				    {
				     "type": "turn_off",
				     "time": "05:00:16"
				    },
				    {
				     "type": "turn_on",
				     "time": "07:00:12"
				    },
				    {
				     "type": "turn_off",
				     "time": "07:15:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "11:00:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "11:15:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "13:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "13:15:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "17:00:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "17:15:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "19:00:05"
				    },
				    {
				     "type": "turn_off",
				     "time": "19:15:05"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:07"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:30:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:08"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:06"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:45:08"
				    }
				],
				"004": [
				    {
				     "type": "turn_on",
				     "time": "00:30:07"
				    },
				    {
				     "type": "turn_off",
				     "time": "00:45:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:00:09"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:15:09"
				    },
				    {
				     "type": "turn_on",
				     "time": "18:35:33"
				    },
				    {
				     "type": "turn_off",
				     "time": "18:37:33"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:30:12"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:45:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:15:13"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "22:45:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:00:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:15:12"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:30:11"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				]
			}
		},
		"3light": {
			"Monday": {
				"001": [],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "02:02:50"
				    },
				    {
				     "type": "turn_off",
				     "time": "02:03:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "02:03:18"
				    },
				    {
				     "type": "turn_off",
				     "time": "02:03:04"
				    },
				    {
				     "type": "turn_on",
				     "time": "02:03:18"
				    },
				    {
				     "type": "turn_off",
				     "time": "03:14:25"
				    },
				    {
				     "type": "turn_on",
				     "time": "04:43:44"
				    },
				    {
				     "type": "turn_off",
				     "time": "04:43:45"
				    },
				    {
				     "type": "turn_on",
				     "time": "04:43:44"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				],
				"003": [
				    {
				     "type": "turn_on",
				     "time": "05:28:41"
				    },
				    {
				     "type": "turn_off",
				     "time": "06:07:58"
				    },
				    {
				     "type": "turn_on",
				     "time": "08:35:34"
				    },
				    {
				     "type": "turn_off",
				     "time": "14:14:53"
				    }
				]
			},
			"Tuesday": {
				"001": [],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "17:38:54"
				    },
				    {
				     "type": "turn_off",
				     "time": "17:39:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "17:38:52"
				    },
				    {
				     "type": "turn_off",
				     "time": "17:39:16"
				    },
				    {
				     "type": "turn_on",
				     "time": "21:46:51"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				],
				"003": [
				    {
				     "type": "turn_on",
				     "time": "08:35:34"
				    },
				    {
				     "type": "turn_off",
				     "time": "14:14:53"
				    },
				    {
				     "type": "turn_on",
				     "time": "15:47:36"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				]
			},
			"Wednesday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "19:59:36"
				    },
				    {
				     "type": "turn_off",
				     "time": "20:46:15"
				    },
				    {
				     "type": "turn_on",
				     "time": "20:46:21"
				    },
				    {
				     "type": "turn_off",
				     "time": "21:28:35"
				    }
				],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "08:35:45"
				    },
				    {
				     "type": "turn_off",
				     "time": "14:14:54"
				    }
				],
				"003": [
				    {
				     "type": "turn_on",
				     "time": "01:11:48"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:25:20"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:25:21"
				    },
				    {
				     "type": "turn_off",
				     "time": "01:25:19"
				    },
				    {
				     "type": "turn_on",
				     "time": "01:25:22"
				    },
				    {
				     "type": "turn_off",
				     "time": "13:22:00"
				    }
				]
			}
		},
		"2light": {
			"Monday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "00:09:13"
				    },
				    {
				     "type": "turn_off",
				     "time": "10:12:24"
				    },
				    {
				     "type": "turn_on",
				     "time": "10:13:19"
				    },
				    {
				     "type": "turn_off",
				     "time": "10:22:55"
				    },
				    {
				     "type": "turn_on",
				     "time": "22:17:53"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "11:32:18"
				    },
				    {
				     "type": "turn_off",
				     "time": "16:39:40"
				    }
				]
			},
			"Tuesday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "10:38:32"
				    },
				    {
				     "type": "turn_off",
				     "time": "13:20:19"
				    },
				    {
				     "type": "turn_on",
				     "time": "12:16:52"
				    },
				    {
				     "type": "turn_off",
				     "time": "12:17:18"
				    },
				    {
				     "type": "turn_on",
				     "time": "12:17:36"
				    },
				    {
				     "type": "turn_off",
				     "time": "12:21:19"
				    },
				    {
				     "type": "turn_on",
				     "time": "12:21:41"
				    },
				    {
				     "type": "turn_off",
				     "time": "13:02:11"
				    },
				    {
				     "type": "turn_on",
				     "time": "23:09:52"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "20:54:47"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				]
			},
			"Wednesday": {
				"001": [
				    {
				     "type": "turn_on",
				     "time": "02:40:31"
				    },
				    {
				     "type": "turn_off",
				     "time": "02:40:32"
				    },
				    {
				     "type": "turn_on",
				     "time": "02:40:31"
				    },
				    {
				     "type": "turn_off",
				     "time": "02:40:32"
				    },
				    {
				     "type": "turn_on",
				     "time": "12:33:58"
				    },
				    {
				     "type": "turn_off",
				     "time": "12:34:00"
				    },
				    {
				     "type": "turn_on",
				     "time": "12:33:58"
				    },
				    {
				     "type": "turn_off",
				     "time": "12:34:00"
				    }
				],
				"002": [
				    {
				     "type": "turn_on",
				     "time": "23:13:00"
				    },
				    {
				     "type": "turn_off",
				     "time": "23:59:59"
				    }
				]
			}
		}
	};
function toMilliseconds(strMilitaryTime) {
	//translate military time to milliseconds via hh*60*60*1000 + mm*60*1000
	var timeSplit = strMilitaryTime.split(":"),
		eventMill = (parseInt(timeSplit[0]) * 60 * 60 * 1000) + (parseInt(timeSplit[1]) * 60 * 1000) + (parseInt(timeSplit[2]) * 1000);
	return eventMill;
}

function sunCycle() {
	var currSun = 19;
	window.sunCycleTimer = window.setInterval(function () {
		$suns.attr('class','');
		$suns.eq(currSun).attr('class','active');
		currSun = (currSun < 23) ? (currSun += 1) : 0;
		//hide all and show eq(i) sun polygon
	}, dayMil / 24 * multiplierForDemo);
}

function moonCycle() {
	var currMoon = 7;
	moonCycleTimer = window.setInterval(function () {
		$moons.attr('class','');
		$moons.eq(currMoon).attr('class','active');
		currMoon = (currMoon < 23) ? (currMoon += 1) : 0;
		//hide all and show eq(i) sun polygon
	}, dayMil / 24 * multiplierForDemo);
}
function startAnimation() {
	var $grassAndSky = $('#GRASS, #SKY');
	$grassAndSky.attr('class','animate');
}
function resetAnimation() {
	var $grassAndSky = $('#GRASS, #SKY');
	$grassAndSky.attr('class','');
}
$('#resetSimBtn').on('click', function (evt) {
	// reset timers
	window.clearInterval(window.sunCycleTimer);
	window.clearInterval(moonCycleTimer);
	for(var i=0; i < window.dayNameTimer.length; i+=1) {
	    clearTimeout(window.dayNameTimer[i]);
	}
	for(var i=0; i < window.lightTimer.length; i+=1) {
	    clearTimeout(window.lightTimer[i]);
	}
	//reset lighting
	$("[data-status]").attr('data-status', 'turn_off');
	// reset sun and moon
	$suns.attr('class','');
	$moons.attr('class','');
	$moons.eq(6).attr('class','active');
	// reset grass/sky animation
	resetAnimation();
});
$('.run-simulation').on('click', function (evt) {
	var system = $(this).attr('data-system'),
		dayNum = 0; // 0 = Monday
	// start the sun and moon interval
	sunCycle();
	moonCycle();
	startAnimation();
	// start the 24 hour clock to change the day name
	Object.keys(lightData[system]).forEach(function(dayName, d) {
		window.dayNameTimer.push(window.setTimeout(function () {
			$dayName.text(dayName);
		}, dayMil * d * multiplierForDemo));
	});
	// then create timeouts for each lighting event
	$.each(lightData[system], function(day, lights) {
		$.each(lights, function(lightId, lightEvents) {
			Object.keys(lightEvents).forEach(function(propertyName, i) {
				var eventTime = toMilliseconds(lightEvents[i].time);
					waitTime = (eventTime + (dayNum * dayMil)) * multiplierForDemo;
			    window.lightTimer.push(window.setTimeout(function () {
			    	$('[data-id="' + lightId + '"]').attr('data-status', lightEvents[propertyName].type);
			        console.log(lightEvents[propertyName].time + ': light ' + lightId + ': ' + lightEvents[propertyName].type);
			    }, waitTime));
			});
		});
		dayNum += 1;
	});
});










