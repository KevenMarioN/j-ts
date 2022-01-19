// const TRESHORAS = 60 * 60 * 3 * 1000;
// const UMDIA = 60 * 60 * 24 * 1000;
// const data = new Date(0 + TRESHORAS + UMDIA);

// const data = new Date(2000,1,8); // a, m, d, h, M, s, ms

// const data = new Date(1642597792166);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());
// // console.log(Date.now());
const ZeroLeft = (num) => {
  return num >= 10 ? num : `0${num}`;
}

const formatDate = (date) => {
  const day = ZeroLeft(date.getDate());
  const mes = ZeroLeft(date.getMonth() + 1);
  const year = ZeroLeft(date.getFullYear());
  const hours = ZeroLeft(date.getHours());
  const minutes = ZeroLeft(date.getMinutes());
  const seconds = ZeroLeft(date.getSeconds());

  return `${day}/${mes}/${year} ${hours}:${minutes}:${seconds}`;
}


const date = new Date();
const dateBrazil = formatDate(date);
console.log(dateBrazil);