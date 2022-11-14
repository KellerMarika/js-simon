
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
    const randomNumberContainer_El = document.getElementById("random-number-container");
    //reset
    randomNumberContainer_El.classList.toggle("d-none", false);
    //crea elementi  figli 
    while (i < randomIANumbers.length) {

        // figli.append IAarray[x] random creati 
        let randomIANum_El = createElement("span", "IA-random-number", "px-5");
        randomIANum_El.append(randomIANumbers[i]);
        //console.log(randomIANum_El);

        //elemento contenitore html.append figli_el
        randomNumberContainer_El.append(randomIANum_El);
        i++
    }

    //timer
    setTimeout(userTurn, 5 * 1000);


    function userTurn() {

        //nacondo i numeri dell IA
        randomNumberContainer_El.classList.add("d-none"); console.log("dopo 5s");

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
        setTimeout(generateScoreContainer, 2 * 1000);
        alert("rotella animata");


        function generateScoreContainer() {

            const scoreContainer_El = createElement("div", "score-container", "border-1");
            console.log(scoreContainer_El);
            const scoreTitle_El = createElement("h2", "title", "result");
            console.log(scoreTitle_El);
            const scoreValue_El = createElement("p", "score-subtitle", "fw-bold");
            console.log(scoreValue_El);

            scoreTitle_El.append("hai fatto schifo");
            scoreValue_El.append(`you nailed: ${userCorrectNumbers.length} / ${randomIANumbers.length}`);
            scoreContainer_El.append(scoreTitle_El);
            scoreContainer_El.append(scoreValue_El);
            mainContainer_El.append(scoreContainer_El);
        }


    }





}


/*

                wile (ii<array.Lenght){

                    if array.includs(userNumbers[ii]){

                        userCorrectChoice.push(userNumber [ii]); 
                        
                    }

                ii++
                }                
            }
            i++
        }

        //finito il ciclo tiro le somme

        crea elementi figli di score_el ()//3 pezzi
        append
        "hai indovinato"+ userCorrectnumber.lenght + "numeri: "//1p

            while (i=userCorrectnumber.lenght){
            score_El.append( userCorrectnumber[i] + ", ");//1p
            }

            //se tutto funziona e avanza tempo aggiungere valutazione finale in base alla userCorrectnumber.lenght



            Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
    }


*/