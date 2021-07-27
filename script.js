// jQuery
$(() => {
    
    let images = ["images/de-1.png",
    "images/de-2.png",
    "images/de-3.png",
    "images/de-4.png",
    "images/de-5.png",
    "images/de-6.png"];
    let dice = $('#dice');
    

    //Fonction d'initialisation de la partie
    function init () {
        //1. Apparition et retour des scores à zéro
        $('#globalScoreJ1, #globalScoreJ2, #roundScoreJ1, roundScoreJ2, .namePlayer1, .namePlayer2').delay(500).fadeIn(700).text(0);
        $('#rollDice, #hold').delay(500).fadeIn(700)

        //2. Ajoute la class "active" au joueur 1
        $('.namePlayer1, #globalScoreJ1').removeClass('active');

        //3. Supprime la class "active" au joueur 2
        $('.namePlayer2, #globalScoreJ2').removeClass('active');

        //4. Affiche le dé par défaut: le 1
        $('#dice').attr("src", images[0]);

        //5. Affiche le nom des joueurs par défaut
        $('.namePlayer1').text('PLAYER 1').removeClass('winner')
        $('.namePlayer2').text('PLAYER 2').removeClass('winner')
    }


    //NEW GAME
    //Au clic, initialisation de la partie & ajout de la class 'active' au joueur1
    $('#btn-NEWGAME').click( function () {
        init ()
        $('.namePlayer1, #globalScoreJ1').addClass('active'); 
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


        //3. Affiche et additionne le résultat du dé dans "current" du joueur ayant la class 'active'
        if($('.namePlayer1').hasClass('active') == true) {
            let roundScore = $('#roundScoreJ1').text()
            let totalScoreRound = parseInt(dice+1) + parseInt(roundScore)
            
            $('#roundScoreJ1').text(totalScoreRound)
            
        } else {
            let roundScoreJ2 = $('#roundScoreJ2').text()
            let totalScoreRoundJ2 = parseInt(dice+1) + parseInt(roundScoreJ2)
            
            $('#roundScoreJ2').text(totalScoreRoundJ2)
        }
    
        //4. Si le résultat du lancé est 1, le joueur perd ses points
        if(dice === 0) {
            nextPlayer();
        }
    })


    //NEXTPLAYER
    //Fonction de changement de joueur 
    function nextPlayer () {
        //1. Si le joueur comporte la class "active" alors changement
        if($('.namePlayer1').hasClass('active') == true) {
            $('#globalScoreJ1, .namePlayer1').removeClass('active');
            $('#roundScoreJ1').text(0);
            $('#globalScoreJ2, .namePlayer2').addClass('active');
        } else {
        //2. Si non, c'est à lui de jouer
            $('#globalScoreJ2, .namePlayer2').removeClass('active');
            $('#roundScoreJ2').text(0);
            $('#globalScoreJ1, .namePlayer1').addClass('active');
        }  
    }


    //BOUTON HOLD!
    $('#hold').click( function () {
        //1. let pour le joueur 1
        let scoreRound = $('#roundScoreJ1').text()
        let scoreGlobal = $('#globalScoreJ1').text()
        let score = parseInt(scoreRound) + parseInt(scoreGlobal)

        //2. let pour le joueur 2
        let scoreRoundJ2 = $('#roundScoreJ2').text()
        let scoreGlobalJ2 = $('#globalScoreJ2').text()
        let scoreJ2 = parseInt(scoreRoundJ2) + parseInt(scoreGlobalJ2)
        

        //3. Curent s'additionne au score global du joueur ayant la class "active"
        if($('#globalScoreJ1, .namePlayer1').hasClass('active') == true){
            $('#globalScoreJ1').text(score);
            nextPlayer()
        } else { 
            $('#globalScoreJ2').text(scoreJ2);
            nextPlayer()    
        }


        //4. Si un des joueur arrive à 100 ou plus, il gagne la partie!
        if(score >= 100) {
            $('.namePlayer1').text('WINNER!').addClass('winner')
            endGame()
        } if(scoreJ2 >= 100) {
            $('.namePlayer2').text('WINNER!').addClass('winner')
            endGame()
        }
        
        //5. Affiche le dé par défaut à chaque "HOLD!"
        $('#dice').attr("src", images[0]);
    })
 

    //Fonction de fin de jeu
    //1. Permet de cacher les boutons RollDice et Hold
    function endGame () {
        $('#rollDice, #hold').fadeOut(1000);    
    }

    
    //Animations survole de la souris
    //Survole HOLD
    $('#hold').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    })

    //Survole New Game
    $('h1').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    })
    
    //Survole Hover
    $('#rollDice').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    })



    //Apparition des règles lors du clique sur le logo "i"
    $('.bi').click(function () {
        //1. Si regles est visible, alors les cachers
        if ($('.regles').is(':visible')) {
            $('.regles').fadeOut(300);
            $('.bi').css('color', 'rgb(39, 39, 39)')
        //2. Sinon, les montrer
        } else {
            $('.regles').fadeIn(1000); 
            $('.bi').css('color', '#0d6efd')
        }
    })

});