const quizData = [
    {
        question: "What is full form of HTML?",
        option: [
            "Hypertext Machine Language",
            "Hyper Transfer Markup Language",
            "Hypertext Markup Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 2,
    },
    {
        question: "Who is the father of HTML?",
        option: [
            "John Bravo",
            "Mark Zukerberg",
            "Tim Berners Lee",
            "John Robert",
        ],
        correct: 2,
    },
        {
            question:
                "which CSS property used to control the spacing between elements?",
            option: [
                "margin",
                "spacing",
                "border-spacing",
                "padding",
            ],
            correct: 3,
        },
        {
         question: 
            " Which of the following is used to read an HTML page and render it?",
        option: [
            "Web Serwer",
            "Web Network",
            "Web Browser",
            "Web Matrix",
            ],
            correct: 2,
        },
        {
            question: 
               " Which HTML tag is used to create an ordered list?",
           option: [
               "<ul>",
               "<ordered-list>",
               "<li>",
               "ol",
               ],
               correct: 3,
           }
]

const quizs = document.querySelector("#quizs");
const answerEle = document.querySelectorAll(".answer");
const [questionEle, option_1, option_2, option_3, option_4,] =
    document.querySelectorAll(
        "#question, .option_1, .option_2, .option_3, option_4"
    );
const submitBtn = document.querySelector("#submit");
let currQuiz = 0;
let score = 0;

const quiz = () => {
    const {question, option} = quizData[currQuiz];
    // console.log(question);

    questionEle.innerText = `${currQuiz+1}: ${question}`;
    option.forEach((currOption, index) => ( window[`option_${index + 1}`].innerText = currOption));
    
}; 

quiz();

const selectOption = () => {
    let ans_index;
    answerEle.forEach((currOption, index) => {
    if (currOption.checked) {
        ans_index = index;
        // console.log(currOption);   
    }
});
return ans_index;
};

const deselectOption = () => {

answerEle.forEach((curEle) => curEle.checked = false);
};

submitBtn.addEventListener(("click"), () =>{
    const selectOptionIndex = selectOption();
    if(selectOptionIndex === quizData[currQuiz].correct) {
        score = score+1; 
    }
    currQuiz++;

    if(currQuiz < quizData.length) {
        deselectOption();
        quiz();
    }
    else {
    quizs.innerHTML = 
    `<div class="result">
    <h2>Your Score: ${score}/${quizData.length} Correct Answer</h2>
    <p>Congratulation for complete all the question.</p>
    <button class="reload" onclick="location.reload()">Play Again</button>
    </div>`;
    }
});


  









