const inputText = document.querySelector(".inputBtn")
const buttonWhich = document.querySelectorAll("#btn")
const result = document.querySelector(".result")
const clearBtn = document.querySelector(".clear-btn")
let arrayInputResults = []
let operator
//Walking by all the buttons and setting its values in the input for calculation
for(let i=0; i<buttonWhich.length; i++)
{
    buttonWhich[i].addEventListener("click", () => test(buttonWhich,i))
}
result.addEventListener("click", test1)


clearBtn.addEventListener("click", function(){
    operator = ""
    arrayInputResults.length = 0
    inputText.value = ""
})


function add(a,b)
{
    return a + b
}

function sub(a,b)
{
    return a - b
}

function mult(a,b)
{
    return a * b
}

function div(a,b)
{
    return a / b
}
function test(buttonWhich,i)
{
    if(buttonWhich[i].innerHTML==="+"||buttonWhich[i].innerHTML==="-"||buttonWhich[i].innerHTML==="X"||buttonWhich[i].innerHTML==="%")
    {
        operator = buttonWhich[i].innerHTML
        arrayInputResults.push(inputText.value)

        return inputText.value=""
    }
    else{
        return inputText.value += buttonWhich[i].innerHTML
    }
}
function test1()
{
    arrayInputResults.push(inputText.value)
    let [A, B] = arrayInputResults.map(Number)
    if(operator==="+")
    {
        inputText.value  = add(A,B)
        
    }
    else if(operator==="-")
    {
        inputText.value = sub(A,B)
    }
    else if(operator==="X")
    {
        inputText.value = mult(A,B)
    }
    else if(operator==="%")
    {
        if(B===0)
        {
            inputText.setAttribute("type","text")
            inputText.value = "Not Possible"
        }
        else
            inputText.value = div(A,B)
    }

}
