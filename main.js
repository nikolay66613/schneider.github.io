const month = [
    "январь", 
    "февраль", 
    "март", 
    "апрель", 
    "май", 
    "июнь", 
    "июль", 
    "август", 
    "сентябрь", 
    "октябрь", 
    "ноябрь", 
    "декабрь"
];

date = new Date();
m = new Date();
if(date.getDay()){
    m.setDate(date.getDate() + 8 - date.getDay())
} 
else {
    m.setDate(date.getDate() + 1)
};

let fullDate = `${m.getUTCDate()}` + ` ${month[m.getUTCDate() - 1]}` + ` ${m.getFullYear()}`;

document.getElementById('data_header').innerText = fullDate;
document.getElementById('news1').innerText = fullDate;
document.getElementById('news2').innerText = fullDate;
document.getElementById('news3').innerText = fullDate;
document.getElementById('news4').innerText = fullDate;
document.getElementById('news5').innerText = fullDate;


