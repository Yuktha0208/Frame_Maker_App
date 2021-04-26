function setup(){
    canvas= createCanvas(640,480);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.position()
}

function draw(){
    image(video , 0 , 0 , 200 , 250);
    circle(50, 50, 80);
    fill(255,0,0)
    stroke(255,0,0)

    //Top
    rect(90, 40, 460, 20);
    fill(0,248,248)
    stroke(0,128,0)

   //Bottom
   rect(90,420,460,20)

  //rect(50,564,30,500)
   fill(0,154,135)
   stroke(0,154,135)

   circle(560,50,80)
   fill(111,222,244)
   stroke(111,222,244)

   //left
   rect(40,50,15,390);;
   fill(211,122,44);
   stroke(111,222,244)

   circle(50,430,80)
   fill(111,222,244)
   stroke(111,222,244)

   //right
   rect(550,50,20,390);;
   fill(211,122,44);
   stroke(111,222,244)

   circle(550,430,80)
   fill(111,222,244)
   stroke(111,222,244)
}
function take_snapshot(){
    save("Img_saved.jpeg");
}