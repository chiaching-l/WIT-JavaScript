$(document).ready(function () {
    let initialTime = 10;


    function startCountDownFunc() {
        if(initialTime > 0) {
            $("#countDown").text(initialTime)
            initialTime --;
            setTimeout(startCountDownFunc, 1000)
    } else {
        $("#CountDown").text("Time is up")
    } 
    
    }


$("#startCountDown").on("click", function() {
    initialTime = 10;
    startCountDownFunc()
})




})