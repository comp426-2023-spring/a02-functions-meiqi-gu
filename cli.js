#!/usr/bin/env node
// Get help 


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