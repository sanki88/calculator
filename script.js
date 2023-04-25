//display element
let displayContent = document.querySelector(".display");
//mark in left top display corner
let mark = document.querySelector(".mark");
// first number on display
let firstNumber = document.querySelector(".firstNumber");

//result
let result;

//Event after click some button
document.addEventListener("click", function(e){
    let divElement = e.target;
    console.log(divElement.textContent);

//loop - only numbers appear in display
if(divElement.textContent == 0 || divElement.textContent == 1 || divElement.textContent == 2 || divElement.textContent == 3 || divElement.textContent == 4 || divElement.textContent == 5 || divElement.textContent == 6 || divElement.textContent == 7 || divElement.textContent == 8 || divElement.textContent == 9)
    {
    displayContent.textContent += divElement.textContent;
    };

//clicked + button
if(divElement.textContent == "+"){
    mark.textContent = "+";
    firstNumber.textContent = displayContent.textContent;
    displayContent.textContent = "";
}
//clicked x button
if(divElement.textContent == "x"){
    mark.textContent = "x";
    firstNumber.textContent = displayContent.textContent;
    displayContent.textContent = "";
}

//clicked - button
if(divElement.textContent == "-"){
    mark.textContent = "-";
    firstNumber.textContent = displayContent.textContent;
    displayContent.textContent = "";
}

//clicked C button
if(divElement.textContent == "C"){
    displayContent.textContent = "";
}

//clicked / button
if(divElement.textContent == "/"){
    mark.textContent = "/";
    firstNumber.textContent = displayContent.textContent;
    displayContent.textContent = "";
}

//clicked / button
if(divElement.textContent == "%"){
    mark.textContent = "%";
    firstNumber.textContent = displayContent.textContent;
    displayContent.textContent = "";
}

//clicked . button
if(divElement.textContent == "."){
    displayContent.textContent += ".";
}

//clicked CE button
if(divElement.textContent == "CE"){
    displayContent.textContent = "";
    mark.textContent = "";
    firstNumber.textContent = "";
}

//clicked = button
if(divElement.textContent == "="){
    if(mark.textContent == "+"){
        Number(firstNumber.textContent);
        Number(displayContent.textContent)
        result = firstNumber.textContent + displayContent.textContent;
        displayContent.textContent = result;
        mark.textContent = "result"
    }
}

})
 



