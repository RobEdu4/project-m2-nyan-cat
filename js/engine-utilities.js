// In this file we have functions that will be used in the Engine.js file.
// nextEnemySpot is a variable that refers to a function. The function has one parameter,
// which we called enemies. enemies will refer to an array that will contain instances of the
// Enemy class. To get more information about the argument that will get passed to this function,
// please see the Engine.js file.

// The purpose of this function is to determine in which slot to place our next enemy.
// The possibilities are 0, 1, 2, 3 or 4.
const nextEnemySpot = (enemies) => {
  // enemySpots will refer to the number of spots available (can you calculate it?)
  const enemySpots = GAME_WIDTH / ENEMY_WIDTH;

  // To find out where to place an enemy, we first need to find out which are the spots available.
  // We don't want to place two enemies in the same lane. To accomplish this, we first create an
  // array with 5 elements (why 5?) and each element is false.
  // We then use forEach to iterate through all the enemies.
  // If you look at the constructor of the Enemy class, you can see that every instance will have a spot property.
  // We can use this property to modify the spotsTaken array.
  const spotsTaken = [false, false, false, false, false];
  enemies.forEach((enemy) => {
    spotsTaken[enemy.spot] = true;
  });

  // We are now in a position to find out position. We declare a variable candidate that is initially undefined.
  // candidate represents a potential spot. The variable will be repeatedly assigned different numbers.
  // We will randomly try different spots until we find out that is available
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    // candidate is assigned a random number between 0 and enemySpots (not including enemySpots). (what number is enemySpots?)
    candidate = Math.floor(Math.random() * enemySpots);
  }

  // When the while loop is finished, we are assured that we have a number that corresponds to a free spot, so we return it.
  return candidate;
};

// addBackground contains all the logic to display the starry background of the game.
// It is a variable that refers to a function.
// The function takes one parameter
// The parameter represents the DOM node to which we will add the background
const addBackground = (root) => {
  // We create a new img DOM node.
  const bg = document.createElement('img');

  // We set its src attribute and the height and width CSS attributes
  bg.src = 'images/dbbg3.jpg';
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;

  // We add it to the root DOM node
  root.append(bg);

  // We don't want the enemies to go beyond the lower edge of the image
  // so we place a white div to hide the enemies after they reach the bottom.
  // To see what it does, you can comment out all the remaining lines in the function to see the effect.
  const whiteBox = document.createElement('div');

  // We put a high z-index so that the div is placed over all other DOM nodes
  whiteBox.style.zIndex = 99;
  whiteBox.style.position = 'absolute';
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = '#fff';
  root.append(whiteBox);


// HEARTS TEST

  const heart1 = document.createElement('img');
  const heart2 = document.createElement('img');
  const heart3 = document.createElement('img');

  heart1.id = `heart1`
  heart1.src = 'images/health.png';
  heart1.style.position = "absolute";
  heart1.style.height = `25px`;
  heart1.style.width = `25px`;
  heart1.style.top = `40px`;
  heart1.style.left = GAME_WIDTH - 50;
  heart1.style.zIndex = 100;
 
  heart2.id = `heart2`
  heart2.src = 'images/health.png';
  heart2.style.position = "absolute";
  heart2.style.height = `25px`;
  heart2.style.width = `25px`;
  heart2.style.top = `40px`;
  heart2.style.left = GAME_WIDTH - 80;
  heart2.style.zIndex = 100;

  heart3.id = `heart3`
  heart3.src = 'images/health.png';
  heart3.style.position = "absolute";
  heart3.style.height = `25px`;
  heart3.style.width = `25px`;
  heart3.style.top = `40px`;
  heart3.style.left = GAME_WIDTH - 110;
  heart3.style.zIndex = 100;

  root.appendChild(heart1);
  root.appendChild(heart2);
  root.appendChild(heart3);

 
  // const heartRow = document.createElement("div");
  // hpRow.id = `heartRow`;
  // root.append(heartRow);
  // for (let i = 1; i <= MAX_LIVES; i++){
  //   const heart = document.createElement("div");

  //   heart.id = `heart-${i}`;
  //   document.heart.style.backgroundImage = "url('./images/health.png')";

  //   heartRow.appendChild(heart);
  // }
};

const addScore = (root) => {
  const scoreBox = document.createElement('div');
  scoreBox.style.zIndex = 98;
  scoreBox.style.position = 'absolute';
  scoreBox.style.top = `-20px`;
  scoreBox.style.left = `40px`;

  scoreBox.style.width = `500px`;
 
  scoreBox.color = '#ffffff';
  root.append(scoreBox);
  const scoreText = document.createElement('p');
  scoreText.style.fontSize = `50px`;
  scoreText.style.position = "absolute";
  scoreText.style.fontFamily = `Lobster, cursive`;
  scoreText.innerText = "0";
  scoreText.id = "scoreText";

  scoreBox.appendChild(scoreText);
};


// const addLives = (root) => {
//    console.log("anything");
//   const heart1 = document.createElement('img');
//   const heart2 = document.createElement('img');
//   const heart3 = document.createElement('img');

//   heart1.src = 'images/health.png';
//   heart1.style.height = `525px`;
//   heart1.style.width = `525px`;
//   heart1.style.top = `-20px`;
//   heart1.style.left = `40px`;
//   heart1.style.zIndex = 100;
 
//   root.append(heart1);

// };