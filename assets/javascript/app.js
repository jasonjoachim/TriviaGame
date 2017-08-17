var correctAnswers=0;

var wrongAnswers=0;

var noAnswers=0;


$(document).ready(function(){


    $("#submit").click(function (){
        correctAnswers = 0;
        wrongAnswers = 0;
        noAnswers = 0;

        console.log("TEST");
    
        var q1Answer = $("input[name=question1]:checked").val();
        console.log(q1Answer);
        if (q1Answer==="true"){
            correctAnswers++;
        } else if(q1Answer=="false"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        console.log(correctAnswers,wrongAnswers,noAnswers)

    });
$("#submit").click(function (){
        correctAnswers = 0;
        wrongAnswers = 0;
        noAnswers = 0;
        
        console.log("TEST");
    
        var q2Answer = $("input[name=question2]:checked").val();
        console.log(q2Answer);
        if (q2Answer==="false"){
            correctAnswers++;
        } else if(q2Answer=="true"){
            wrongAnswers++;
        } else {
            noAnswers++;
        }
        console.log(correctAnswers,wrongAnswers,noAnswers)
    });





});







//$("input[name=question1]:checked").onclick()

