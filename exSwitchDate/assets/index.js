const h1 = document.querySelector('.container h1');
const zeroLeft = (num) => {
  return num >= 10 ? num : `0${num}`;
}

const whatMonth = (month) => {
  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  return months[month];
}

const whatDayWeek = (weekNumber) => {
  const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  return week[weekNumber];
}

const createdTime = (today) => {
  const week = whatDayWeek(today.getDay());
  const moth = whatMonth(today.getMonth());
  const year = today.getFullYear();
  const hours = zeroLeft(today.getHours());
  const minutes = zeroLeft(today.getMinutes());
  const day = zeroLeft(today.getDate());
  return `${week}, ${day} de ${moth} de ${year} </br> ${hours}:${minutes}`
}
const att = () => {
  const data = new Date();
  const todayFormated = createdTime(data);
  h1.innerHTML = todayFormated;
}
att();
setInterval(() => {
  att();
}, 60000)

