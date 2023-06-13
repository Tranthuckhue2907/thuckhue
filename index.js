var myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    correctAnswer: "c",
  },
];
var form = document.getElementById("form");
console.log(form);

myQuestions.forEach(function (questionData, index) {
  var soCau = document.createElement("h2");
  soCau.innerText = "Câu " + (index + 1) + ":";
  var qDom = document.createElement("h4");
  qDom.innerText = questionData.question;
  form.appendChild(soCau);
  form.appendChild(qDom);

  for (const key in questionData.answers) {
    var valueAnswer = questionData.answers[key];
    var pLine = document.createElement("p");
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "answers" + index);
    input.setAttribute("value", valueAnswer);
    input.onchange = function (event) {
      console.log("Đáp án câu " + (index + 1) + " là:", event.target.value);
    };

    var lablel = document.createElement("label");
    lablel.innerText = valueAnswer;
    pLine.appendChild(input);
    pLine.appendChild(lablel);
    form.appendChild(pLine);
  }
});
var button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("value", "Nộp bài");
var count = 0;
button.onclick = calScore;
function calScore() {
  for (let i = 0; i < myQuestions.length; i++) {
    var check = document.querySelector(`input[type="button"]:checked`);
    if (check.value == myQuestions[i].correctAnswer) {
      count++;
    }
  }
  var point = (10 / myQuestions.length) * count;
  var resultDom = document.getElementById("result");
  resultDom.innerText = "Điểm của bạn là: " + point;
}
form.appendChild(button);

// function calScore() {
//   var score = 0;
//   var radios = document.querySelectorAll('input[type="button"]:checked');

//   for (var i = 0; i < radios.length; i++) {
//     var questionIndex = parseInt(radios[i].name.replace("answer", ""));
//     var userAnswer = radios[i].value;

//     if (userAnswer === myQuestions[questionIndex].correctAnswer) {
//       score++;
//     }
//   }

//   var resultDom = document.getElementById("result");
//   resultDom.innerHTML = "Điểm: " + score + " trên " + myQuestions.length;
// }
