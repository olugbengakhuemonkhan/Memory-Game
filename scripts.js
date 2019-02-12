  
$(document).ready(() => {

    // console.log("sanity check")

    $('button').click(function () {
        // console.log($(this));
        let gridSize = $(this).attr('diff');
        // console.log(gridSize)
        let cards = []
        //our monster start at 1.So start 1 at 1
        //everytime we loop through, we push 2 monsters

        //
        for (let i = 1; i <= gridSize/ 2 ; i++) {
            let monsterNumber = i;
            if (i < 10) {
                monsterNumber = "0" + i
            }

            cards.push(`<img src="./images/img-${monsterNumber}.jpg" />`);
            cards.push(`<img src="./images/img-${monsterNumber}.jpg" />`);
        };
        cards = shuffleDeck(cards);

        //console.log(cards)
        let memoryHTML = '';

        cards.forEach((card) => {

            memoryHTML += `
                <div class="card col-sm-3">
                    <div class="card-holder">
                        <div class="card-front">${card}</div>
                        <div class="card-back"><img src="./images/logo.jpg" /></div>
                    </div>
                </div>
            `

        });
        console.log(memoryHTML);

        $('.memory-game').html(memoryHTML);


        $('.card-holder').click(function(){
            $(this).addClass('flip');
            let cardUp = $('.flip');

            if(cardUp.length ===2){
                const card1 = cardUp[0];
                const card2 = cardUp[1];
                if(card1.innerHTML == card2.innerHTML){

                    cardUp.removeClass('flip');
                    cardUp.addClass('matched');
                }else{

                    setTimeout(()=>{
                    cardUp.removeClass('flip')},2000);
                    }   
            }
        })
    })

})
function shuffleDeck(aDeckToBeShuffled){
    
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        let rand2 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
     console.log(aDeckToBeShuffled);
     return aDeckToBeShuffled;
}