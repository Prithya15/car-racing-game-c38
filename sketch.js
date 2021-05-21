var canvas,backgroundImage,gamestate=0
var playercount,database,form,player,gamestate
var allplayers
var car1,car2,car3,car4,cars

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game=new Game()
    game.getstate()
    game.start()
}
function draw(){
if(playercount===4){
    game.update(1)
}
if(gamestate===1){
    clear()
    game.play()
}
}
