const h1 = document.querySelector('.container h1');
const zeroLeft = (num) => {
  return num >= 10 ? num : `0${num}`;
}

const whatMoth = (month) => {
  months = {0 : "Janeiro", 1 : "Fevereiro",2 : "Março", 3 : "Abril",4 : "Maio",5 : "Junho",6 : "Julho", 7 : "Agosto", 8: "Setembro", 9: "Outubro", 10 : "Novembro",11 : "Dezembro"}
  return months[month];
}

const whatDayWeek = (weekNumber) => {
  const week = { 0: "Domingo", 1: "Segunda-feira", 2: "Terça-feira", 3: "Quarta-feira", 4: "Quinta-feira", 5: "Sexta-feira", 6: "Sábado" }
  return week[weekNumber];
}

const createdTime = (today) =>{
  const week = whatDayWeek(today.getDay());
  const moth = whatMoth(today.getMonth());
  const year = today.getFullYear();
  const hours = zeroLeft(today.getHours());
  const minutes = zeroLeft(today.getMinutes());
  const day = zeroLeft(today.getDate());
  return `${week}, ${day} de ${moth} de ${year} </br> ${hours}:${minutes}`
}
const att = () =>{
  const data = new Date();
  const todayFormated = createdTime(data);
  h1.innerHTML = todayFormated;  
}
att();
setInterval(() =>{
 att();
},60000)

