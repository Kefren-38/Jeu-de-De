// AJAX
$(() => {
    let newGame = $('#btn-NEWGAME')
    let rollDice = $('#rollDice')
    let hold = $('#hold')
    let images = ["images/de-1.png",
    "images/de-2.png",
    "images/de-3.png",
    "images/de-4.png",
    "images/de-5.png",
    "images/de-6.png"];
    let dice = $('#dice');
    
    
    //NEW GAME 
    //LORS DU CLIC, TOUS LES SCORES REVIENNENT A 0
    $('#btn-NEWGAME').click( function () {
        $('#globalScoreJ1, #globalScoreJ2, #roundScoreJ1, roundScoreJ2').text(0);

        $('.namePlayer1, #globalScoreJ1').css('font-weight', 'bold');
    })

    //ROLL DICE
    //LORS DU CLIC, UN DE S'AFFICHE
    $('#rollDice').click( function () {
        let dice = Math.floor(Math.random()*6);
        console.log(dice);
        $('#dice').attr("src", images[dice]);
    })

    console.log(dice)
});