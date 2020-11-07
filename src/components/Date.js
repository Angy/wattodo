import React from 'react';

export default function getCurrentDate(separator='') {
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let newDate = new Date();
    let date = newDate.getDate();
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();
    let day = days[newDate.getDay()];

    return `${separator}${month<10?`0${month}`:`${month}`}${separator} ${date}, ${separator}${year} ${separator}${day}`

}