function isTouching (object1,object2){
    if (object1.x-object2.x<object1.width/2+object2.width/2
      && object2.x-object1.x<object1.width/2+object2.width/2
      && object1.y-object2.y<object1.height/2+object2.height/2
      && object2.y-object1.y<object1.height/2+object2.height/2){
        return true;
      } else {
        return false;
      }
  }
  
  function bounceOff (objA, objB){
    if(objA.x-objB.x<objA.width/2+objB.width/2
      && objB.x-objA.x<objA.width/2+objB.width/2){
        objA.velocityX=objA.velocityX*-1;
        objB.velocityX=objB.velocityX*-1;
      }
  
      if(objA.y-objB.y<objA.height/2+objB.height/2
        && objB.y-objA.y<objA.height/2+objB.height/2){
          objA.velocityY=objA.velocityY*-1;
          objB.velocityY=objB.velocityY*-1;
        }
  }