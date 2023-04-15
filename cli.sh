#!/usr/bin/env node
#Get help 
show_help() {
    printf -- "Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE"
    printf -- "\n"
    printf -- "  -h\t\tShow this help message and exit.\n"
    printf --  "  -n, -s\tLatitude: N positive; S negative.\n"
    printf -- "  -e, -w\tLongitude: E positive; W negative.\n"
    printf -- "  -z\t\tTime zone: uses tz.guess() from moment-timezone by default.\n"
    printf -- "  -d 0-6\tDay to retrieve weather: 0 is today; defaults to 1.\n"
    printf -- "  -j\t\tEcho pretty JSON from open-meteo API and exit.\n"
    exit 0
}

const timezone = moment.tz.guess();
const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latittude + '&longitude=-' + longitutde + '&daily=precipitation_hours&current_weather=true&timezone=America%2FNew_York'); 
const data = await response.json(); 

const days = args.d; 

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}