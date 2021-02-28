"use strict";

//
//  DATE AND TIME
//

// The current date
let now = new Date();

now.getFullYear();// returns year 4 digits
now.getMonth();// returns month from 0 till 11
now.getDate(); // returns day from 1 till 31
now.getDay(); // rerutns day of week, where 0 - Sunday, 6 - Saturday

now.getHours(); // returns hours in your time zone
now.getMinutes(); // minutes
now.getSeconds(); // seconds
now.getMilliseconds(); // ms
now.getUTCHours(); // returns hours in UTC+0

now.getTime(); // returns timestamp
now.getTimezoneOffset(); // UTC-1 = 60 and UTC+1 = -60

now.setHours(0); // set hours to 0
now.setHours(0, 0, 0, 0); // set hours, minutes, seconds, ms to 0

// Create a new Date with milliseconds passed from 1 January 1970 UTC +0
let Jan01_1970 = new Date(0);

// 2 January 1970
let Jan02_1970 = new Date(24 * 3600 * 1000);

// 31 December 1969 
let Dec31_1970 = new Date(-(24 * 3600 * 1000));

// new Date(datestring)
let date_str = new Date('2021-02-28 15:00:00');

// new Date (year, month, date, hours, minutes, seconds, ms)
let date_num = new Date(2010, 11, 29, 12, 30, 0, 0);

//returns dates differance in ms
date_str - date_num;

// 32 January automaticly fixed to 1 February
let error_date = new Date(2013, 0, 32);

// YYYY-MM-DDTHH:mm:ss.sssZ
// Z - time zone
// if format is not correct returns NaN
let ms = Date.parse('2010-01-01T12:30:00.000'); // returns timestamp by date
