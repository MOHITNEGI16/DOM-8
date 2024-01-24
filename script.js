  const hours = document.getElementById("hours");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");



   
  setInterval(()=>{
    let date = new Date();
    let hrs = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hrs = Number(hrs)<10?`0${hrs}`:hrs;
    minutes = Number(minutes)<10?`0${minutes}`:`${minutes}`;
    seconds = Number(seconds)<10?`0${seconds}`:`${seconds}`;

    hours.innerHTML = hrs;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
  },1000);
   


  



