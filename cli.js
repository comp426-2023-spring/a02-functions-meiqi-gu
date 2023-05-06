#!/usr/bin/env node
// Get help 

import minimist from 'minimist'; 
import moment from 'moment'; 

const mini = minimist(process.argv.slice(2)); 
const helpText = "Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE\n\t-h \t\tShow this help message and exit.\n\t-n, -s\t\tLatitude: N positive; S negative.\n\t-e, -w\t\tLongitude: E positive; W negative.\n\t-z\t\tTime zone: uses tz.guess() from moment-timezone by default.\n\t-d 0-6\t\tDay to retrieve weather: 0 is today; defaults to 1.\n\t-j\t\tEcho pretty JSON from open-meteo API and exit.\n"; 
if (mini['h']) {
  console.log(helpText); 
}

const timezone = moment.tz.guess(); 
