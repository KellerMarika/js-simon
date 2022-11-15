
/************* ELEMENTI*****************/

//bottone play
const play_btn = document.querySelector("[name=play-btn]");

//contenitore 
const mainContainer_El = document.getElementById("main-container");
//numeri generati dall'IA
let randomIANumbers = [];
//lunghezza dell'array dei numeri random dell'IA
let randomIANumbersLenght = 5;

//numeri inseriti dall'utente
let userNumbers = [];
//numeri corretti
let userCorrectNumbers = [];

let i = 0

/************* ADD EVENT LISTNER *****************/
/* console.log(generateArrayOfRandomNumber(0, 100, 5)); */

//addeventlistner sul bottone :
play_btn.addEventListener("click", showIANumbers);



function showIANumbers() {
    //genera IAarray numeri random.
    randomIANumbers = generateArrayOfRandomNumber(0, 100, 5);
    console.log(randomIANumbers);

    //recupera elemento contenitore html
    //contenitore numeri random
    const randomNumbersContainer_El = createElement("div", "IA", "random-numbers-container");
    //reset
    randomNumbersContainer_El.classList.toggle("d-none", false);
    //crea elementi  figli 
    while (i < randomIANumbers.length) {

        // figli.append IAarray[x] random creati 
        let randomIANum_El = createElement("span", "IA-random-number", "px-5");
        randomIANum_El.append(randomIANumbers[i]);
        //console.log(randomIANum_El);

        //elemento contenitore html.append figli_el
        randomNumbersContainer_El.append(randomIANum_El);
        mainContainer_El.append(randomNumbersContainer_El);
        i++
    }

    //timer
    setTimeout(userTurn, 30 * 1000);


    function userTurn() {

        //nacondo i numeri dell IA
        randomNumbersContainer_El.classList.add("d-none"); console.log("dopo 5s");

        //controllo che l'array sia  composto da 5 valori
        for (i = 0; userNumbers.length < randomIANumbers.length; i++) {

            let userNum = prompt("wich number do you remenber?");

            //che siano numeri 
            if (isNaN(+userNum) || userNum === "") {
                alert("This is not a Number!");

                //cotrollo che questo numero non sia già stato inserito
            } else if (checkElement(userNumbers, +userNum) === true) {
                alert("You have already insert this number. try again!");

            } else {
                userNumbers.push(+userNum);
                console.log("userNum=", userNum);

                //controllo sul valore
                if (checkElement(randomIANumbers, userNumbers[i]) === true) {

                    //raccolgo i valori corretti dell'utente
                    userCorrectNumbers.push(userNumbers[i]);

                    console.log(userNumbers, "utente");
                    console.log(userCorrectNumbers, "corretti");
                }
            }
        }
        console.log("RETURN", userCorrectNumbers);

        const loadingSpinner = document.querySelector(".animated-svg");
        loadingSpinner.classList.remove("opacity-0");

        setTimeout(generateScoreContainer, 3 * 1000);

        function generateScoreContainer() {

            loadingSpinner.classList.add("opacity-0");

            const scoreContainer_El = createElement("div", "score-container", "border-1");
            console.log(scoreContainer_El);
            const scoreTitle_El = createElement("h2", "title", "result");
            console.log(scoreTitle_El);
            const scoreValue_El = createElement("h2", "score-subtitle", "fw-bold");
            console.log(scoreValue_El);


            if (userCorrectNumbers.length === 0) {
                scoreTitle_El.append("you are a fool monkey");
            } else if (userCorrectNumbers.length <= 2) {
                scoreTitle_El.append("neanderthal brain");
            } else if (userCorrectNumbers.length === 3) {
                scoreTitle_El.append("brain level: Italian politician");
            }
            else if (userCorrectNumbers.length <= 4) {
                scoreTitle_El.append("ready for a 3-5 year old \"sapientino\"");
            }
            else if (userCorrectNumbers.length <= 5) {
                scoreTitle_El.append(`WOOOW, too smart!
                You are ready for the js object lesson!`);
            }


            scoreValue_El.append(`you nailed: ${userCorrectNumbers.length} / ${randomIANumbers.length}:   `);

            i = 0
            while (i < userCorrectNumbers.length) {

                scoreValue_El.append(`${userCorrectNumbers[i]} `);
                i++
            }
            scoreContainer_El.append(scoreTitle_El);
            scoreContainer_El.append(scoreValue_El);
            mainContainer_El.append(scoreContainer_El);
        }
    }
}
/* push*/