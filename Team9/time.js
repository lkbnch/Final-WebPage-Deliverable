function timeCheck(){     
    var time = new Date()
    var dayStart = new Date()     
    dayStart.setHours(7)
    var nightStart = new Date()    
    nightStart.setHours(20)
    
    if (dayStart <= time && nightStart >= time) {
         document.documentElement.style.backgroundImage = 'url(images/day.jpg)'
    }
    else{
         document.documentElement.style.backgroundImage = 'url(images/night.jpg)'
    }
}

function callEveryMin(){
  setInterval(timeCheck, 60000)
}

timeCheck()
callEveryMin()
