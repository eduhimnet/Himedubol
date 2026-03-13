
// Publish Article

function publishArticle(){

let title = document.getElementById("title").value
let content = document.getElementById("content").value

let articles = JSON.parse(localStorage.getItem("articles")) || []

articles.push({title,content})

localStorage.setItem("articles",JSON.stringify(articles))

alert("Article Published!")

}

// Show Articles

if(document.getElementById("articles")){

let articles = JSON.parse(localStorage.getItem("articles")) || []

let container = document.getElementById("articles")

articles.forEach(a =>{

container.innerHTML += `
<h3>${a.title}</h3>
<p>${a.content}</p>
`

})

}

// Quiz

function loadQuiz(){

let quiz = [

{
q:"भारत की राजधानी क्या है?",
options:["दिल्ली","मुंबई","जयपुर","लखनऊ"],
answer:"दिल्ली"
},

{
q:"5 + 5 = ?",
options:["10","11","9","8"],
answer:"10"
}

]

let container = document.getElementById("quiz")

quiz.forEach(q =>{

container.innerHTML += `<h3>${q.q}</h3>`

q.options.forEach(o=>{

container.innerHTML += `<p>${o}</p>`

})

})

}
