let questions=[
    {
        question: "which method add items in array",
        options: ["push()","pop()","shift()","unshift()"],
        answer: "push()"
     }, 
    {
        question: "which keyword declares variable?",
        options: ["var","let","const","all of the above"],
        answer: "all of the above"
     }, 
     {
        question: "which method removes last item in array?",
        options: ["push()","pop()","shift()","unshift()"],
        answer: "pop()"
     
    },
    {
        question: "which method adds an item to the beginning of an array?",
        options: ["push()","pop()","shift()","unshift()"],
        answer: "unshift()"
    }
];


function loadQuiz(){
    let quizDiv= document.getElementById("quiz");
    quizDiv.innerHTML="";
    questions.forEach((q,index)=>{
        quizDiv.innerHTML += `
        <div class="question">
        <p>${q.question}</p>
        ${q.options.map(option=>
            `<label>
                <input type="radio" name="q${index}" value="${option}">${option}
            </label><br>`
        ).join("")}
        </div>`
    });
    let lastScore= localStorage.getItem("score");
    if(lastScore){
        document.getElementById("previousScore").textContent=
         `Previous Score: ${lastScore}`;
    }
}

// function to submit quiz and calculate score
function submitQuiz(){
    try {
        let score=0;
        questions.forEach((q,index)=>{
            let selectedOption=document.querySelector(`input[name="q${index}"]
                :checked`);
            if(!selectedOption){
                throw new Error(`Please answer question ${index+1}`);
            }
            if(selectedOption.value=q.answer){
                score++;
            }
        });

        document.getElementById("result").textContent= "Your Score: "+score;
        localStorage.setItem("score",score);
        
    } catch (error) {
        document.getElementById("result").textContent= error.message;
        alert(error.message);
    }
}
loadQuiz();