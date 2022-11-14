
/************* ELEMENTI*****************/

//bottone play
const play_btn=document.querySelector("[name=play-btn]");
//console.log(play_btn);
//contenitore numeri random
const randomNumberContainer_El= document.getElementById("random-number-container");
//contenitore punteggio finale
//console.log(randomNumberContainer_El);
const scoreContainer_El=document.getElementById("score-container");
//console.log(scoreContainer_El);

const randomIANumbers=[];
const randomIANumbersLenght=5;

const userNumbers=[];
const userCorrectNumbers=[];



/*

1)addeventlistner sul bottone : {
    a)genera IAarray numeri random.
    b)recupera elemento genitore html
    b)crea elementi  figli 
    c) e figli.append IAarray[x] random creati 
    d)el genitore.append e figli
    e)stampa genitore

    // il timeout lo metto dentro alla funzione come ultima istruzione

    f) set timeout funzione userTry 30*1000 

    //ritardata di 30 secondi rispetto alla fine del blocco di codice precedente
    user try(){

        1)elemento genitore add d-none;

        while (i<IAarray.lenght){
            const userNum=prompt "inserisci uno dei numeri visti in precedenza"
            validazione valore
            if (validazione valore=false){
                alert (ritenta!)
            }else{

                UserNumbers.push(userNum);

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