var timerObj = document.getElementById("timer")
var startBtnObj = document.getElementById("start-btn")
var resetBtnObj = document.getElementById("reset-btn")
var isTimerRunning = false
var interval

// Reset button
resetBtnObj.addEventListener("click",function(){
    // console.log("reset button clicked");
    timerObj.textContent = "00:00";
})

// Start button
startBtnObj.addEventListener("click", ()=>{
    // console.log("start button clicked");
    if(isTimerRunning){
        startBtnObj.textContent = "Start"; 
        isTimerRunning = false
        clearInterval(interval)
    } else {
        startBtnObj.textContent = "Stop"; 
        isTimerRunning = true
        interval = setInterval(function(){
            // Handler
            // console.log("hi");
            // write logic to increment timer
            var timerText = timerObj.textContent
            var timerArr = timerText.split(":")
            var minutes = Number(timerArr[0])
            var seconds = Number(timerArr[1])
            seconds++
            if(seconds == 60){
                minutes++
                seconds = 0
            }
            if(minutes < 10){
                minutes = "0" + minutes
            }
            if(seconds < 10){
                seconds = "0" + seconds
            }
            timerObj.textContent = minutes + ":" + seconds
        }, 1000)
    }
})