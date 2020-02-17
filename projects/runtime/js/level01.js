var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 1000, "y": 250 },
                { "type": "sawblade", "x": 1900, "y": groundY },
                { "type": "sawblade", "x": 2700, "y": groundY },
                { "type": "sawblade", "x": 4000, "y": 250},
                { "type": "reward","x":400,"y":groundY-100}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
       function createSawBlade(x,y){
         var hitZoneSize = 25;
         var damageFromObstacle = 10;
         var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
         sawBladeHitZone.x = x;
         sawBladeHitZone.y = y;
         game.addGameItem(sawBladeHitZone);
         var obstacleImage = draw.bitmap('img/sawblade.png');
         sawBladeHitZone.addChild(obstacleImage);
         obstacleImage.x = -25;
         obstacleImage.y = -25;
       }
      

    for(var i = 0; i <= levelData.gameItems.length-1; i++){
        var gameItem = levelData.gameItems[i];
        
        if(gameItem.type === 'sawblade'){
            createSawBlade(gameItem.x, gameItem.y);
        }
    }
        function createScary(x,y){
            var hitZoneSize = 30;
            var damageFromObstacle = 15;
            var scaryHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            scaryHitZone.x = x;
            scaryHitZone.y = y;
           
             var obstacleImage = draw.bitmap('img/obstacle.png');
            obstacleImage.x = -45;
            obstacleImage.y = -95;
            
            scaryHitZone.addChild(obstacleImage);
            game.addGameItem(scaryHitZone);
        }
        createScary(500,groundY-40);
        createScary(1000,groundY-40);
        createScary(1500,groundY-40);
        createScary(2000,groundY-40);
        createScary(2500,groundY-40);
        createScary(3000,groundY-40);
        
        function createMyobby(x,y) {
            var hitZoneSize = 50;
            var damageFromObstacle = 10;
            var obbyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            obbyHitZone.x = x;
            obbyHitZone.y = y;
            
            game.addGameItem(obbyHitZone);
            
            var obstacleImage = draw.bitmap('img/books.png');
            obbyHitZone.addChild(obstacleImage);
            obstacleImage.x = -45;
            obstacleImage.y = -55;
        }
       createMyobby(100,200);
        
        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy', 100);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            
            var redSquare = draw.bitmap('img/hq.png');
            redSquare.x = -65;
            redSquare.y = -145;
            
            enemy.addChild(redSquare);
            game.addGameItem(enemy);
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            };
        }
        
        createEnemy(600, groundY-100);
        createEnemy(3300, groundY-100);
        createEnemy(5400,groundY-100);
       
       function createBad(x,y){
           var enemy = game.createGameItem('enemy3',100);
           enemy.x = x;
           enemy.y = y;
           enemy.velocityX = -1;
           
           var blueSquare = draw.bitmap('img/enemy3.png');
           blueSquare.x = -60;
           blueSquare.y = -120;
           
           enemy.addChild(blueSquare);
           game.addGameItem(enemy);
           
           enemy.onPlayerCollision = function() {
               game.changeIntegrity(-30);
               enemy.fadeOut();
              
           };
           enemy.onProjectileCollision = function() {
               game.increaseScore(50);
               enemy.fadeOut();
           };
           
       }
       
       createBad(2300, groundY-110);
       createBad(4000, groundY-110); 
       
       
        
        function createHealer(x,y){
            var healer = game.createGameItem('healer', 25);
            healer.x = x;
            healer.y = y;
            healer.velocityX = -2;
            
            var band = draw.bitmap('img/healer.png');
            band.x = -25;
            band.y = -25;
            
            healer.addChild(band);
            game.addGameItem(healer);
            
            healer.onPlayerCollision = function() {
                game.changeIntegrity(100);
                healer.fadeOut();
            };
        }
        
        createHealer(2800, groundY-50);
        createHealer(3800, groundY-50);
        
        function createReward(x,y){
            var reward = game.createGameItem('reward', 25);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -2;
            
            var picture = draw.bitmap('img/reward3.png');
            picture.x = -25;
            picture.y = -25;
            
            reward.addChild(picture);
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                game.increaseScore(50);
                reward.fadeOut();
            };
          
        }
    createReward(1200,groundY-100);
    createReward(4600,groundY-100);
    createReward(2100,groundY-100);
        
        function createKawaii(x,y) {
            var reward = game.createGameItem('kawaii', 25);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -2;
            
            var cute = draw.bitmap('img/reward2.png');
            cute.x = -25;
            cute.y = -25;
            
            reward.addChild(cute);
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                game.increaseScore(100);
                reward.fadeOut();
            };
        }
        createKawaii(800, groundY-50);
        createKawaii(5400,groundY-50);
        createKawaii(3400,groundY-50);
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
