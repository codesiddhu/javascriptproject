const month =document.getElementById("month-name");
const day =document.getElementById("day-name");
const number =document.getElementById("day-number");
const year =document.getElementById("year");
const data =new Date()
console.log(data);
month.textContent =data.toLocaleString("en",{month:"long"})
day.textContent =data.toLocaleString("en",{weekday:"long"})
number.textContent =data.getDate()
year.textContent=data.getFullYear()
