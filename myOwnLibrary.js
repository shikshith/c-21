//function with arguments
// it is used so that our algorithm can work with any 2 objects in the game(use general names like object 1,object2)
// the actual objects between whom we need to check bounceOff are given in function call
function bounceOff (object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
  
  }