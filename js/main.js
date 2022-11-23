import Card from './card.js'


document.addEventListener('DOMContentLoaded', function() {

let cardCount = 8,
    cardsNumberArray = [],
    cardsArrary = [],
    firstCard = null,
    secondCard = null

    function newGeme(container, cardCount){

    for (let i = 1; i <= cardCount /2; i++ ) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
       };

       cardsNumberArray = cardsNumberArray.sort(() => Math.random()- 0.5)
       
    for (const cardNunber of cardsNumberArray){
        cardsArrary.push(new Card(container,cardNunber,flip))
       }

       function flip(card) {
        setTimeout (()=>{
            if(firstCard !== null && secondCard !== null) {
                if(firstCard.number !== secondCard.number){                
            firstCard.open = false
            secondCard.open = false
            firstCard = null
            secondCard = null                    
        }        
       }
        }, 500)

          

        if (firstCard == null) {
            firstCard = card
        } else {
            if(secondCard == null){
                secondCard = card
            }            
        }

        if(firstCard !== null && secondCard !== null) {
            if(firstCard.number == secondCard.number){
                firstCard.success = true
                secondCard.success = true
                firstCard = null
                secondCard = null
            }
           }

           if (document.querySelectorAll('.card.success').length == cardsNumberArray.length){
            confirm('Ура, ПОБЕДА!!!, Сыграть еще?')
            container.innerHTML = ''
            cardCount = cardCount,
            cardsNumberArray = [],
            cardsArrary = [],
            firstCard = null,
            secondCard = null
            newGeme(document.getElementById('geme'), cardCount)
        }
     }
           
    }
       newGeme(document.getElementById('geme'), cardCount)
       
})