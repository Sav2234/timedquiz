const time_line = document.querySelector(".header")
const timeText = document.querySelector(".timer", ".time_left")
const timeCount = document.querySelector(".timer", ".timer_secs")

var timeValue = 10;
var que_numb = 1;
var que_count = 1;
var counter;
var counterLine;

function startTimer(time) {
    counter = setInterval (timer, 1000);}

function timer() {
        timerCount = time;

        time--;
        if (time < 9)
            var addZero = timeCount;
            timerCount = "0" +addZero;
    
        if(time < 0) 
            clearInterval (counter);
            timeText = "Time Off";
            const allOptions = option_list.children.length;

            let correcAns = questions[que_count].answer;

        for(i=0; i< allOptions; i++)
            
        if(option_list.children[i].textContent == correcAns) 
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            console.log("Time Off: Auto selected correct answer.");
                
            
        for(i=0; i < allOptions; i++)
            option_list.children[i].classList.add("disabled"); 
            next_btn.classList.add("show");}
        

function startTimerLine(time){
    counterLine = setInterval(timer, 29);}

function timer(){
    time += 1;
    time_line.style.width = time + "px";
    if(time > 549)
        clearInterval(counterLine);
}

function queCounter(index){

    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}        