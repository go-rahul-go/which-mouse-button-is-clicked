const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const middleButton = document.querySelector("#middle");

const showResult = document.querySelector("#show-result");
var counter = 0;
var intervalVariable;

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("right");
})


document.addEventListener("mouseup", (event) => {
    switch (event.button) {
        case 0:
            showResult.textContent = "left click";
            intervalVariable = setInterval(()=>{
                leftButton.style.backgroundColor="yellow";
                counter++;
                // console.log(counter);
                if(counter==3)
                {
                    clearInterval(intervalVariable);
                    leftButton.style.backgroundColor="#b5b5b5";
                    counter=0;
                }
            },100);
            break;
        case 1:
            showResult.textContent = "middle click";
            intervalVariable = setInterval(()=>{
                middleButton.style.backgroundColor="cyan";
                counter++;
                // console.log(counter);
                if(counter==3)
                {
                    clearInterval(intervalVariable);
                    middleButton.style.backgroundColor="#b5b5b5";
                    counter=0;
                }
            },100);
            break;
        case 2:
            showResult.textContent = "right click";
            intervalVariable = setInterval(()=>{
                rightButton.style.backgroundColor="red";
                counter++;
                // console.log(counter);
                if(counter==3)
                {
                    clearInterval(intervalVariable);
                    rightButton.style.backgroundColor="#b5b5b5";
                    counter=0;
                }
            },100);
            break;
    }
})



console.log(counter);