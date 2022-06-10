const months = [
    'Січня',
    'Лютого',
    'Березня',
    'Квітня',
    'Травеня',
    'Червня',
    'Липня',
    'Серпня',
    'Вересня',
    'Жовтня',
    'Листопада',
    'Грудня',
  ];
  const weekdays = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
  ];
  
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");



/* unncesesary for my B/D
const currentDate = new Date();
let thisYear = currentDate.getFullYear();
let thisMonth = currentDate.getMonth();
let thisDay = currentDate.getDate();
*/

const futureDate = new Date(2022, 5, 14, 00, 00, 0)
const oneYear = 365 * 24 * 60 * 60 * 1000;
const birthDate = new Date(1998, 5, 14, 00, 00, 0)
const age = Math.floor((futureDate.getTime() - birthDate.getTime()) / oneYear);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const day = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

//-- to add an additional 0 before hours/minutes 
function format(item) {
    if (item < 10) {
        return  (item = `0${item}`);
    }
    return item;
}
giveaway.textContent = `Зворотній Відлік до Д.Н. : ${weekday}, ${day} ${month} ${year} ${format(hour)}:${format(min)}. Виповнюється: ${age}`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
const today = new Date().getTime();
const difference = futureTime - today;

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const daysLeft = Math.floor(difference / oneDay);
const hoursLeft = Math.floor((difference % oneDay) / oneHour);
const minsLeft = Math.floor((difference % oneHour) / oneMinute);
const secsLeft = Math.floor((difference % oneMinute) / 1000);

const timeLeft = [daysLeft, hoursLeft, minsLeft, secsLeft];


items.forEach(function (item, index) {
    item.innerHTML  = format(timeLeft[index]);
});
if (difference < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Вітаю з Днем Народження!</h4>`;
  }
}


let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();