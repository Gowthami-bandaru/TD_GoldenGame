function live()
{
  
 if(banana.x ===200 && World.seconds>5){

  

 
  
  next.visible = true;
   if(mousePressedOver(next)){
    pan.destroy();
   next.destroy();
  scene2.destroy();
   cup.destroy();
   plate.destroy();
   banana.destroy();
   fry.destroy();
   touch.destroy();
   eatPlayer.destroy();
   coffee.destroy();
  
    livingr.visible=true;
    
    OMG.visible= true;
    shirt.visible=true;
    mouse.visible= true;
    food.visible=true;
    book.visible = true;
    web.visible = true;
    broom.visible = true;
    creepy.visible = true;
    lizard.visible = true;
spidy.visible = true;
    OMG.depth= livingr.depth;
 OMG.depth += 1; 
 shirt.depth= livingr.depth;
 shirt.depth += 1; 
 food.depth= livingr.depth;
 food.depth += 1; 
 mouse.depth= livingr.depth;
 mouse.depth += 1; 
 book.depth= livingr.depth;
 book.depth += 1; 
 web.depth= livingr.depth;
 web.depth += 1; 
 creepy.depth= livingr.depth;
 creepy.depth += 1; 

 broom.depth= livingr.depth;
 broom.depth += 1; 

 lizard.depth= livingr.depth;
 lizard.depth += 1; 
 spidy.depth= livingr.depth;
 spidy.depth += 1; 
   }
   if(keyDown(DOWN_ARROW)){
    broom.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
  broom.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    broom.x -=2
  }
  if(keyDown(UP_ARROW)){
    broom.y -=2
  }
}
   if(broom.isTouching(food))
   {
    clickSound.play();
     food.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(spidy))
   {
    clickSound.play();
     spidy.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(lizard))
   {
    clickSound.play();
     lizard.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(shirt))
   {
    clickSound.play();
     shirt.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(mouse))
   {
    clickSound.play();
     mouse.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(book))
   {
    clickSound.play();
     book.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(web))
   {
    clickSound.play();
     web.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(creepy))
   {
    clickSound.play();
     creepy.destroy();
     cleanScore+=1;
   }
  

   if(cleanScore===8)
   {
    
     OMG.destroy();
    getReady.visible = true;
    broom.destroy();
getReady.depth  = livingr.depth;
getReady.depth += 1;

   
  }
  
if(cleanScore===8 && mousePressedOver(getReady)){
  count = 1;
  
  

getReady.destroy();
livingr.destroy();
bathroom.visible = true;
bathroom.depth = getReady.depth;
bathroom.depth += 1;
ready.visible = true;
ready.depth = bathroom.depth;
ready.depth += 1;
dress1.visible = true;
dress1.depth = bathroom.depth;
dress1.depth += 1;

dress2.visible = true;
dress2.depth = bathroom.depth;
dress2.depth += 1;

dress3.visible = true;
dress3.depth = bathroom.depth;
dress3.depth += 1;

hang1.visible = true;
hang1.depth = bathroom.depth;
hang1.depth += 1;
hang2.visible = true;
hang2.depth = bathroom.depth;
hang2.depth += 1;

top1.visible = true;
top1.depth = bathroom.depth;
top1.depth += 1;

top2.visible = true;
top2.depth = hang1.depth;
top2.depth += 1;

top3.visible = true;
top3.depth = bathroom.depth;
top3.depth += 1;

pant1.visible = true;
pant1.depth = bathroom.depth;
pant1.depth += 1;

pant2.visible = true;
pant2.depth = hang1.depth;
pant2.depth += 1;

pant3.visible = true;
pant3.depth = bathroom.depth;
pant3.depth += 1;

coat.visible = true;
coat.depth = bathroom.depth;
coat.depth += 1;

tux.visible = true;
tux.depth = bathroom.depth;
tux.depth += 1;

skirt.visible = true;
skirt.depth = bathroom.depth;
skirt.depth += 1;

lip1.visible = true;
lip1.depth = coat.depth;
lip1.depth += 1;

lip2.visible = true;
lip2.depth = coat.depth;
lip2.depth += 1;

lip3.visible = true;
lip3.depth = coat.depth;
lip3.depth += 1;

lip4.visible = true;
lip4.depth = coat.depth;
lip4.depth += 1;

lip5.visible = true;
lip5.depth = coat.depth;
lip5.depth += 1;

lip6.visible = true;
lip6.depth = coat.depth;
lip6.depth += 1;



}
if(count===1)
{
  
  live_3();
  
  
}
live_4();
live_5();

if(liveScore===1)
{
  live_6();
}


}



function live_3(){
  
  if(mousePressedOver(top1) || mousePressedOver(top2) || mousePressedOver(pant2) || mousePressedOver(dress1) ){
    casual.visible = true;
    casual.depth = pant1.depth;
    casual.depth += 1;
   
    if(!  casualSound.isPlaying()){
      casualSound.play();
    }
  setTimeout(() => {  casual.visible = false; }, 1500);
  }
   if(mousePressedOver(pant1) || mousePressedOver(dress2) || mousePressedOver(dress3) ){
    fancy.visible = true;
    fancy.depth = coat.depth;
    fancy.depth += 1;
    if(! noPartySound.isPlaying()){
      noPartySound.play();
    }
      setTimeout(() => {  fancy.visible = false; }, 1500);
  }
   if(mousePressedOver(coat) || mousePressedOver(top3) || mousePressedOver(pant3)  ){
    summer.visible = true;
    summer.depth = dress2.depth;
    summer.depth += 1;
    if(! summerSound.isPlaying()){
      summerSound.play();
    }

  
  setTimeout(() => {  summer.visible = false; }, 1500);
  }
  if(mousePressedOver(tux) || mousePressedOver(skirt) || mousePressedOver(lip3)){
    if(mousePressedOver(tux))
    {
      tuxScore=1;
    }
    if(mousePressedOver(skirt))
    {
      skirtScore=1;
    }

    if(mousePressedOver(lip3))
    {
      lipScore=1;
    }
    perfect.visible = true;
    perfect.depth = dress2.depth;
    perfect.depth += 1;
    perfect.loop=false;
  
    if(! perfectSound.isPlaying()){
      perfectSound.play();
    }
  
  setTimeout(() => {  perfect.visible = false; }, 1500);}

   if(mousePressedOver(lip1) || mousePressedOver(lip4) || mousePressedOver(lip5)){
   dark.visible = true;
   dark.depth = lip1.depth;
   dark.depth += 1;

  
  setTimeout(() => {  dark.visible = false; }, 1500);
}
 if(mousePressedOver(lip2) || mousePressedOver(lip6)){
  light.visible = true;
  light.depth = lip1.depth;
 light.depth += 1;

 
 setTimeout(() => {  light.visible = false; }, 1500);
  } }
  

  function live_4()
  {
    if(tuxScore===1 && skirtScore===1 && lipScore===1)
    {
      
 
  bathroom.destroy();
  ready.destroy();
  dress1.destroy();
  dress2.destroy();
  dress3.destroy();
  hang1.destroy();
  hang2.destroy();
  top1.destroy();
  top2.destroy();
  top3.destroy();
  pant1.destroy();
  pant2.destroy();
  pant3.destroy();
  coat.destroy();
  skirt.destroy();
  tux.destroy();
  lip1.destroy();
  lip2.destroy();
  lip3.destroy();
  lip4.destroy();
  lip5.destroy();
  lip6.destroy();
fancy.destroy();
summer.destroy();
casual.destroy();
perfect.destroy();

setTimeout(() => {  
      presentation.depth= lip1.depth;
      presentation.depth+=1;
      presentation.visible=true; }, 100);

      e1.visible = true;
      e2.visible = true;
      e1.depth = presentation.depth;
      e1.depth += 1;
      e2.depth = presentation.depth;
      e2.depth += 1;
      if(mousePressedOver(presentation))
      {
        perfectSound.stop();
      casualSound.stop();
      summerSound.stop();
      noPartySound.stop();
      perfectSound.stop();

      }

    
      if(mousePressedOver(e1) ||mousePressedOver(e2) ){
        if(mousePressedOver(e2))
        {
          e2Score=1;
        }
        
       
        count=3;
        e1.destroy();
        e2.destroy();
       e3.visible = true;
       e4.visible = true;
       e3.depth = presentation.depth;
       e3.depth += 1;
       e4.depth = presentation.depth;
       e4.depth += 1;
     
     }
    
       if(mousePressedOver(e3) ||mousePressedOver(e4) ){
        if(mousePressedOver(e3))
        {
       
          e3Score=1;
        }
       
 
         count=4;
         e3.destroy();
     
         e4.destroy();
         e5.visible = true;
         e6.visible = true;
         e5.depth = presentation.depth;
         e5.depth += 1;
         e6.depth = presentation.depth;
         e6.depth += 1;
       }
       if(mousePressedOver(e5) ||mousePressedOver(e6) ){
         if(mousePressedOver(e6))
         {
           e6Score=1;
         }
          count=5;
         e5.destroy();
         e6.destroy();
         e7.visible = true;
         e8.visible = true;
         e7.depth = presentation.depth;
         e7.depth += 1;
         e8.depth = presentation.depth;
         e8.depth += 1;
       }


       if(mousePressedOver(e7) ||mousePressedOver(e8) ){
        if(mousePressedOver(e7))
         {
           e7Score=1;
         }
         
 
         count=6;
         e7.destroy();
         e8.destroy();
         e7.visible = true;
         e8.visible = true;
         e7.depth = presentation.depth;
         e7.depth += 1;
         e8.depth = presentation.depth;
         e8.depth += 1;

         if(e1Score===0 && e4Score===0 && e5Score===0&& e8Score===0)
         {
          badP.visible = true;
          badP.depth = presentation.depth;
          badP.depth += 1;
          
          count=7;
           
         }            
         if(e2Score==1 || e3Score===1 || e6Score===1|| e7Score===1) 
         {
          badP.visible = true;
          badP.depth = presentation.depth;
          badP.depth += 1;
          count=8;
         }
         if((e2Score===1 && e3Score===1) || (e2Score===1 && e6Score===1) || (e2Score===1 && e7Score===1)||(e3Score===1 && e6Score===1) ||(e3Score===1 && e7Score===1)||(e6Score===1 && e7Score===1))
         {
          fineP.visible = true;
          fineP.depth = presentation.depth;
          fineP.depth += 1;
          badP.destroy();
          count=9;
         }

         if((e2Score===1 && e3Score===1 && e6Score===1) || (e2Score===1 && e3Score===1 &&e7Score===1)||
         (e2Score===1 && e6Score===1 &&e7Score===1) || (e3Score===1 && e6Score===1 && e7Score===1))
         {
          fineP.visible = true;
          fineP.depth = presentation.depth;
          fineP.depth += 1;
        count=9;
         }
 if(e2Score===1 && e3Score===1 && e6Score===1&& e7Score===1)
 {
  goodP.visible = true; 

     
      
  goodP.depth = presentation.depth;
  goodP.depth += 1;
  badP.destroy();
  fineP.destroy();
   count=10;
   
 }
      }
  }
    }

  
function live_5(){
   
  if(count===7||count===8|| count===9|| count===10){
    list.visible = true;
    list.depth = presentation.depth;
    list.depth += 1;
    


  if(mousePressedOver(list)){
    list.destroy();
    goodP.destroy();
    presentation.destroy();
    
   badP.destroy();
    fineP.destroy();
   shop.visible = true;
   shop.depth =goodP.depth;
   shop.depth += 1;

   goodP.visible=false;


   oil.visible = true;
   oil.depth = list.depth;
   oil.depth += 1;
  
   butter.visible = true;
   butter.depth = oil.depth;
   butter.depth += 1;

   bread.visible = true;
   bread.depth = butter.depth;
   bread.depth += 1;

   tomato.visible = true;
   tomato.depth = bread.depth;
   tomato.depth += 1;

   veggies.visible = true;
   veggies.depth = tomato.depth;
   veggies.depth += 1;

   flour.visible = true;
   flour.depth = shop.depth;
   flour.depth += 1;

   packet.visible = true;
   packet.depth = shop.depth;
   packet.depth += 1;

   eggs.visible = true;
   eggs.depth = shop.depth;
   eggs.depth += 1;

   milk.visible = true;
   milk.depth = shop.depth;
   milk.depth += 1;

   potato.visible = true;
   potato.depth = shop.depth;
   potato.depth += 1;
   
   spice.visible = true;
   spice.depth = shop.depth;
   spice.depth += 1;

   hand.visible = true;
   hand.depth = shop.depth;
   hand.depth += 1;
   liveScore=1;
  }
 
  }
  
}

    
  function live_6()
  {
    if(keyDown(DOWN_ARROW)){
      hand.y +=2
    }
    if(keyDown(RIGHT_ARROW)){
    hand.x +=2
    }
    if(keyDown(LEFT_ARROW)){
      hand.x -=2
    }
    if(keyDown(UP_ARROW)){
      hand.y -=2
    }

    if(hand.isTouching(bread))
    {
      bread.destroy();
     
        grocerySound.play();
      }
    

    if(hand.isTouching(tomato))
    {
      tomato.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(eggs))
    {
      eggs.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(spice))
    {
      spice.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(milk))
    {
      milk.destroy();
     
        grocerySound.play();
      }
    

      if(hand.isTouching(flour))
    {
      flour.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(spray))
    {
      spray.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(vase))
    {
      vase.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(oil))
    {
      oil.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(veggies))
    {
      veggies.destroy();
     
        grocerySound.play();
      }

      if(hand.isTouching(butter))
      {
        butter.destroy();
       
          grocerySound.play();
        }
        if(hand.isTouching(potato))
        {
          potato.destroy();
         
            grocerySound.play();
          }
          if(hand.isTouching(packet))
          {
            packet.destroy();
           
              grocerySound.play();
            }
    
      
                              }

  