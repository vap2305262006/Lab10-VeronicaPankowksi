//Question 1//
function greetUser(){
    document.getElementById("output").innerHTML = "Greetings!";

}

greetUser()

//Question 2//
function changeText()
{
document.getElementById('message').innerText = "Hello World!"
}

document.getElementById("button1").addEventListener('click',addNumber)

//Question 3//
function changeText() {
    document.getElementById('num1').value;
    document.getElementById('num2').value;
}

//Question 4//
document.getElementById("button3").onclick - function() {
    updateTitle();
}
function updateTitle(){
    document.getElementById("title").innerText = document.getElementById(inputField).value;
}

//Question 5//
document.getElementById("btns").onclick =function(){
    combinestrings();
}

function combinestrings() {
document.getElementById('combinedtext').innerText = document.getElementById('input1').value + document.getElementById("input2").value;
}

//Question 6//
function changebackgroundcolor()
{
document.getElementById('colorbox').style.backgroundColor = "blue";
}

document.getElementById("change").addEventListener("click", changebackgroundcolor)