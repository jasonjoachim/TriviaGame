var correctAnswers=0;

var wrongAnswers=0;

var noAnswers=0;

var timeLeft=120;
var intervalId=0;

intervalId= setInterval(function(){
    if(timeLeft<=0){
        console.log("Time's UP");
        clearInterval(intervalId=0);
        timeLeft=120;
    }
    $("#timeLeft").html("You Have "+timeLeft--+" Seconds Left")
    // console.log(timeLeft+"Seconds Left"+timeLeft--)

},1000)

$(document).ready(function(){


    $("#submit").click(function (){
        correctAnswers = 0;
        wrongAnswers = 0;
        noAnswers = 0;

        var q1Answer = $("input[name=question1]:checked").val();
        if (q1Answer==="true"){
            correctAnswers++;
        } else if(q1Answer=="false"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q2Answer = $("input[name=question2]:checked").val();
        if (q2Answer==="false"){
            correctAnswers++;
        } else if(q2Answer=="true"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }  
        var q3Answer = $("input[name=question3]:checked").val();
        if (q3Answer==="false"){
            correctAnswers++;
        } else if(q3Answer=="true"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q4Answer = $("input[name=question4]:checked").val();
        if (q4Answer==="true"){
            correctAnswers++;
        } else {
            wrongAnswers++;}
        var q5Answer = $("input[name=question5]:checked").val();
        if (q5Answer==="true"){
            correctAnswers++;
        } else if(q5Answer=="false"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q6Answer = $("input[name=question6]:checked").val();
        if (q6Answer==="true"){
            correctAnswers++;
        } else if(q6Answer=="false"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q7Answer = $("input[name=question7]:checked").val();
        if (q7Answer==="true"){
            correctAnswers++;
        } else if(q7Answer=="false"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q8Answer = $("input[name=question8]:checked").val();
        if (q8Answer==="false"){
            correctAnswers++;
        } else if(q8Answer=="true"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q9Answer = $("input[name=question9]:checked").val();
        if (q9Answer==="false"){
            correctAnswers++;
        } else if(q9Answer=="true"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        var q10Answer = $("input[name=question10]:checked").val();
        if (q10Answer==="true"){
            correctAnswers++;
        } else if(q10Answer=="false"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        $("scores").html("You ended with"+correctAnswers+" Correct Answers "+wrongAnswers+" Wrong Answers "+noAnswers+" Unanswered Questions ");

        console.log(correctAnswers,wrongAnswers,noAnswers);
    });










});







//$("input[name=question1]:checked").onclick()

