

/*
function addManualSign(fieldId){
    let queryId = "#field" + fieldId;
    document.getElementById(queryId).innerHTML = "&#9733;"
    //add to array
}
addManualSign();
*/
/*
function addManualSign(fieldId){
    document.getElementById('fieldId').innerHTML = "&#9733;"
    //add to array
}
*/
let takenFields = [];
let fieldId;
let wonRounds = 0;

function styleText (){
    document.getElementById("lets play").style.color = "white";
    document.getElementById("lets play").style.fontFamily = "helvetica";
    document.getElementById("lets play").style.fontSize = "2em";
}
styleText();

let turnsMade = 0;
let winningCombinations = {combination1:1, combination2:2, combination3:3}; //unused
let autoTakenFields = [];
function winStatement (){
    let youWon = document.createElement("h3");
    youWon.innerHTML = "You won!!!";
    document.getElementById("lets play").innerHTML = "";
    document.getElementById("info-box").appendChild(youWon);
    wonRounds++;
}


function restartGame(){
    takenFields = [];
    let restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Play again";
    //restartBtn.setAttribute("id");
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener('click', function() {
        
        turnsMade = 0;
        takenFields = [];
        autoTakenFields = [];
        document.getElementById("lets play").innerHTML = "";
        document.getElementById("field1").innerHTML = "";
        document.getElementById("field2").innerHTML = "";
        document.getElementById("field3").innerHTML = "";
        document.getElementById("field4").innerHTML = "";
        document.getElementById("field5").innerHTML = "";
        document.getElementById("field6").innerHTML = "";
        document.getElementById("field7").innerHTML = "";
        document.getElementById("field8").innerHTML = "";
        document.getElementById("field9").innerHTML = "";
    })

   
    
}

function addManualSign(fieldNumber){
    
    let fieldId = "field" + fieldNumber;
    document.getElementById(fieldId).innerHTML = "&#9733;"
    document.getElementById(fieldId).disabled = 'disabled';
    takenFields.push(fieldNumber);//add to array
    function madeATurn(){
        turnsMade++;
        return turnsMade; //access local counter 
    }
    madeATurn();

    
    let automaticField = Math.floor((Math.random() * 9) + 1); 
        
        while ((takenFields.includes(automaticField)===true)){ //checking taken fields
            automaticField = Math.floor((Math.random() * 9) + 1);
        }
        let automaticFieldId = "field" + automaticField; 

    setTimeout(computerPlayerFunction, 1000); 
        function computerPlayerFunction(){
            madeATurn();
            document.getElementById(automaticFieldId).innerHTML= "&#9734;"; 
            document.getElementById(automaticFieldId).disabled = 'disabled';
            
            autoTakenFields.push(automaticField); 
            console.log("auto taken fields:" + autoTakenFields);
            console.log("turnsMade" + turnsMade);

            if (turnsMade===2 || turnsMade===4 || turnsMade===6 || turnsMade=== 8){ 
                document.getElementById("lets play").innerHTML = "Your turn!";
                styleText();
            }

            /*if (turnsMade>=3){ 
                let twoInARowObject = {a: [1,2], }
            }*/
            
        }
        
        console.log("turnsMade" + turnsMade);
        if (turnsMade===1 || turnsMade===3 || turnsMade===5 || turnsMade=== 7 || turnsMade===9) {
            document.getElementById("lets play").innerHTML = "...";
            styleText();
        } //?what are you?
            
        console.log("taken fields:" + takenFields);

    function manualWin(){
        if (takenFields.includes(1)==true && takenFields.includes(2)==true && takenFields.includes(3)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(4)==true && takenFields.includes(5)==true && takenFields.includes(6)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(7)==true && takenFields.includes(8)==true && takenFields.includes(9)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(1)==true && takenFields.includes(4)==true && takenFields.includes(7)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(2)==true && takenFields.includes(5)==true && takenFields.includes(8)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(3)==true && takenFields.includes(6)==true && takenFields.includes(9)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(1)==true && takenFields.includes(5)==true && takenFields.includes(9)==true){
            winStatement();
            restartGame();
        }
        else if (takenFields.includes(3)==true && takenFields.includes(5)==true && takenFields.includes(7)==true){
            winStatement();
            restartGame();
        }
    }
    manualWin();

    function automaticWin(){
        if (autoTakenFields.includes(1)==true && autoTakenFields.includes(2)==true && autoTakenFields.includes(3)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
            let restartBtn = document.createElement("button");
            restartBtn.innerHTML = "Play again";
        }
        else if (autoTakenFields.includes(4)==true && autoTakenFields.includes(5)==true && autoTakenFields.includes(6)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
        else if (autoTakenFields.includes(7)==true && autoTakenFields.includes(8)==true && autoTakenFields.includes(9)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
        else if (autoTakenFields.includes(1)==true && autoTakenFields.includes(4)==true && autoTakenFields.includes(7)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
        else if (autoTakenFields.includes(2)==true && autoTakenFields.includes(5)==true && autoTakenFields.includes(8)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
        else if (autoTakenFields.includes(3)==true && autoTakenFields.includes(6)==true && autoTakenFields.includes(9)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
        else if (autoTakenFields.includes(1)==true && autoTakenFields.includes(5)==true && autoTakenFields.includes(9)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
        else if (autoTakenFields.includes(3)==true && autoTakenFields.includes(5)==true && autoTakenFields.includes(7)==true){
            let youWon = document.createElement("h3");
            youWon.innerHTML = "You lost";
            document.getElementById("lets play").innerHTML = "";
            document.getElementById("info-box").appendChild(youWon);
        }
    }
    automaticWin();
    
}


/*
function addAutomaticSign(fieldNumber){
    let fieldId = "field" + fieldNumber;
    document.getElementById(fieldId).innerHTML = "&#9734;";
    document.getElementById(fieldId).disabled = 'disabled';
    manualFields.push(fieldNumber);//add to array
    function madeATurn(){
        turnsMade++;
        return turnsMade; //access local counter 
    }    
}    
addAutomaticSign();   */
    
    /*

else if (turnsMade===2 || turnsMade===4 || turnsMade===6 || turnsMade===8){
    let yourTurn = document.createElement("h3");
    yourTurn.innerHTML = "Your turn";
    document.getElementById("info-box").appendChild(yourTurn);
    document.querySelector("h3").style.color = "white";
    document.querySelector("h3").style.fontFamily = "helvetica";
    document.querySelector("h3").style.fontSize = "2em";
    }
    */





