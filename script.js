// jQuery
$(() => {
    let newGame = $('#btn-NEWGAME')
    let rollDice = $('#rollDice')
    let hold = $('#hold')
    let roundScoreJ1 = $('#roundScoreJ1');
    let roundScoreJ2 = $('#roundScoreJ2');

    let images = ["images/de-1.png",
    "images/de-2.png",
    "images/de-3.png",
    "images/de-4.png",
    "images/de-5.png",
    "images/de-6.png"];
    let dice = $('#dice');
    
    
    //NEW GAME 
    //Retour des scores à zéro
    $('#btn-NEWGAME').click( function () {
        
        //1. Retour des scores à zéro
        $('#globalScoreJ1, #globalScoreJ2, #roundScoreJ1, roundScoreJ2').text(0);

        //2. Ajoute la class "active" au joueur 1
        $('.namePlayer1, #globalScoreJ1').addClass('active');

        //3. Supprime la class "active" au joueur 2
        $('.namePlayer2, #globalScoreJ2').removeClass('active');

        //4. Affiche le dé par défaut: le 1
        $('#dice').attr("src", images[0]);

        //5. Affiche le nom des joueurs par défaut
        $('.namePlayer1').text('PLAYER 1').removeClass('winner')
        $('.namePlayer2').text('PLAYER 2').removeClass('winner')
    })


    //ROLL DICE
    //Lancé de dé aléatoire
    $('#rollDice').click( function () {
 
        //1. Créa d'un let générant un nombre random de 1 à 6
        let dice = Math.floor(Math.random()*6);
        
        //2. Affiche dans la console
        //Attribue l'image correspondante
        console.log(dice+1);
        $('#dice').attr("src", images[dice]);

        //3. Affiche le résultat du dé dans "current" du joueur1
         $('#roundScoreJ1').text(dice+1);
      
        //4. Si le résultat est 1, le joueur 1 perd ses points 
        if(dice === 0) {
            $('#roundScoreJ1').text(0);
            nextPlayer();
        }
    })

    //function scorej1 () {
    //    let score = 
    //}

    //NEXTPLAYER
    //Fonction de changement de joueur 
    function nextPlayer () {
        if($('#globalScoreJ1, .namePlayer1').css('active') !== true) {
            $('#globalScoreJ1, .namePlayer1').removeClass('active');
            $('#globalScoreJ2, .namePlayer2').addClass('active');
        } else {
            $('#globalScoreJ2, .namePlayer2').removeClass('active');
            $('#globalScoreJ1, .namePlayer1').addClass('active');
        }
        
    }


    $('#hold').click( function () {
        let scoreRound = $('#roundScoreJ1').text()
        let scoreGlobal = $('#globalScoreJ1').text()
        let score = parseInt(scoreRound) + parseInt(scoreGlobal)
        
        if($('#globalScoreJ1, .namePlayer1').css('active') !== true){
            $('#globalScoreJ1').text(score);
            nextPlayer()
        } else { 
            $('#globalScoreJ2').text($('#roundScoreJ1').text());
            nextPlayer()    
        }

        if(score >= 100) {
            $('.namePlayer1').text('WINNER!').addClass('winner')
        }
        
        $('#dice').attr("src", images[0]);
    })
//  


});