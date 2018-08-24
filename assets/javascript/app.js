//List question and answers array with correct answer
var questions = [{
    question: "Which of the following Asians are bad at driving?",
    answers: ["Japanese", "Chinese", "Koreans", "All of the Above"],
    correctAnswer: "All of the Above"
    }, {
    question: "Which of the following countries did sushi originate from?",
    answers: ["Japan", "China", "Korea", "None of the Above"],
    correctAnswer: "China"
    }, {
    question: "Which of the following countries built a statue in honor of the dog, Hachiko?",
    answers: ["China", "Taiwan", "Japan", "None of the Above"],
    correctAnswer: "Japan",
    }, {
    question: "The Yellow Sea lies between which two countries?",
    answers: ["Taiwan/China", "Mongolia/Korea", "China/Korea", "Mongolia/Thailand"],
    correctAnswer: "China/Korea"
    }, {
    question: "Which Asian restaurant is known for serving dishes such as spicy basil noodles and green curry?",
    answers: ["Filipino", "Thai", "Vietnamese", "Indian"],
    correctAnswer: "Korea",
    }, {
    question: "What chain of businesses do Vietnamese people usually run?",
    answers: ["Laundry Mats", "Liquor Stores", "Nail Salons", "All of the Above"],
    correctAnswer: "Nail Salons"
    }, {
    question: "What is currently the most popular type of Asian in pop culture?",
    answers: ["Japanese", "Chinese", "Filipino", "Korean"],
    correctAnswer: "Korean",
    }, {
    question: "Which Asian is generally known for being really good at karaoke?",
    answers: ["Japanese", "Chinese", "Filipino", "Korean"],
    correctAnswer: "Filipino"
    }, {
    question: "What kind of Asian is Daniel Voong?",
    answers: ["Chinese", "Vietnamese", "Korean", "Thai"],
    correctAnswer: "Chinese",
    }, {
    question: "What Asian would typically have the last name as Nguyen?",
    answers: ["Thai", "Chinese", "Vietnamese", "Filipino"],
    correctAnswer: "Korean"
}];

//Attempting to use methods/functions within variables
//=========================================================================
var game = {
    numCorrect: 0,
    numIncorrect: 0,
    counter: 120,

    //Function to initialize counter and start countdown
    timer: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter<=0) {
            game.finish();
        }
    },

    start: function () {
        timer = setInterval(game.timer, 1000); //set timer = 1000 milliseconds
        $('#quiz-body').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i=0; i<questions.length; i++) {
            $('#quiz-body').append('<h2>' + questions[i].question + '</h2>');
            for (var j=0; j<questions[i].answers.length; j++) {
                $("#quiz-body").append("<input type='radio' name='question" +
                i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $('#quiz-body').append('<br><br><button id="done">End Trivia</button>');
    },

    finish: function() {
            if ($.each(this).val()==questions[i].correctAnswer){
                game.numCorrect++;
            }
            else {
                game.numIncorrect++;
            }

        this.result();
    },

    result: function() {
        clearInterval(timer);
        $('#quiz-body').html("<h2>Trivia Completed</h2>");
        $('#quiz-body').append("<h3>Correct Answers: " + this.numCorrect + "</h3>");
        $('#quiz-body').append("<h3>Incorrect Answers: " + this.numIncorrect + "</h3>");
        $('#quiz-body').append("<h3>Unanswered: " + (questions.length - (this.numIncorrect + this.numCorrect)) + "</h3>");
    }
}

$('#start').on('click', function() {
    game.start();
});

$(document).on('click', '#done', function() {
    game.finish()
});
