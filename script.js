const daysEl =  document.getElementById('days');
const hoursEl =  document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const graduation = "31 Dec 2022";

 function countdown() {
   const graduationDate= new Date(graduation);
   const currentDate = new Date();

   const diff =(graduationDate - currentDate);
   const totalSeconds = diff / 1000 ;
   const days=Math.floor(totalSeconds / 3600 / 24 );
   const hours=Math.floor(totalSeconds / 3600) % 24;
   const minutes=Math.floor(totalSeconds / 60) % 60;
   const seconds=Math.floor(totalSeconds % 60);
  
  daysEl.innerHTML= days;
  hoursEl.innerHTML= hours;
  minutesEl.innerHTML= minutes;
  secondsEl.innerHTML= seconds;

 }

countdown();

setInterval(countdown,1000);

