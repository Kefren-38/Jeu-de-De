// AJAX
$(() => {
    let newGame = $('#btn-NEWGAME')
    let rollDice = $('#rollDice')
    let hold = $('#hold')
    
    
    //NEW GAME 
    //LORS DU CLIC, TOUS LES SCORES REVIENNENT A 0
    $('#btn-NEWGAME').click( function () {
        $('#globalScoreJ1, #globalScoreJ2, #roundScoreJ1, roundScoreJ2').text(0);
    })
})