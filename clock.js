
setInterval(() => {
    let date=new Date()
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
let Time=hours + ":"  + minutes + ":" + seconds
let sett=document.getElementById("id1")
sett.textContent=Time
}, 1000);