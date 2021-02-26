var hp1;
var database; 
var Pos;

function setup(){

    // creating databases hp1
    database = firebase.database();

    createCanvas(500,500);
    hp1 = createSprite(250,250,20,20);
    hp1.shapeColor = "red";

var hp1ref = database.ref('Ball/Pos');
hp1ref.on("value",readPosition) ; 

}

function draw(){
    background("white");

    if(Pos !== undefined  )
    {
        
   

    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();

    //console.log(hp1ref);

    }
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/


function readPosition(data)
{

  Pos  = data.val();
  hp1.x = Pos.x ;
  hp1.y = Pos.y ;
    
} 

function writePos(x,y)
{
    
    database.ref('Ball/Pos').set
    (
        {
          'x' : Pos.x+x,
          'y' : Pos .y+y
        }
    );
        
}

