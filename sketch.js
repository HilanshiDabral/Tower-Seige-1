const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9,block10, block11, block12, block13, block14, block15, block16;
var ground, stand, ball, polygon;

function preload()
{
    polygon = loadImage("polygon.png");
}
function setup()
{
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,400);
    
   


    ground = new Ground(450,390,900,20);
    stand = new Ground(150, 330, 300, 170);
    // level one
    block1 = new Block (300, 275, 30, 40);
    block2 = new Block (330, 275, 30, 40);
    block3 = new Block (360, 275, 30, 40);
    block4 = new Block (390, 275, 30, 40);
    block5 = new Block (420, 275, 30, 40);
    block6 = new Block (450, 275, 30, 40);
    block7 = new Block (480, 275, 30, 40);

    // level two
    block8 = new Block (330,235,30,40);
    block9 = new Block (360,235,30,40);
    block10= new Block (390,235,30,40);
    block11= new Block (420,235,30,40);
    block12= new Block (450,235,30,40);
    // level three
    block13=new Block (360,195,30,40);
    block14= new Block (390,195,30,40);
    block15= new Block (420,195,30,40);
    
    //top
    block16 = new Block (390,155,30,40);
    ball = Bodies.circle (50,200,20);
    World.add (world, ball);
    slingshot = new slingShot(this.ball, {x:100, y:200})

    function draw ()
    {
       text ("Drag the ball and release it", 100, 30);
       ground.display();
       stand.display();
       fill ("grey")
       block1.display();
       block2.display();
       block3.display();
       block4.display();
       block5.display();
       block6.display();
       block7.display();
       fill("turquoise")
       block8.display();
       block9.display();
       block10.display();
       block11.display();
       block12.display();
       fill("purple");
       block13.display();
       block14.display();
       block15.display();
       fill("orange");
       block16.display();
       
       
      
       fill ("gold");
       imageMode (CENTER)
       image (polygon,ball.position.x,ball.position.y, 40,40);
       slingshot.display();

    
    }


    
}
function mouseDragged ()
{
    Matter.Body.setPosition(this.ball, {x:mouseX,y:mouseY});
}
function mouseReleased ()
{
    slingshot.fly()
}