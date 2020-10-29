# Object Oriented Programming Game Project

<p align="center"><img src="./images/start.png"></p>

## The game

This game is called the Concordia Coding Game. Essentially, you need to avoid: Diana, Richard, and Tiffany from falling on top of you with a whole bunch of hard new knowledge. The longer you can avoid them by using the left and right arrow keys, the higher your time score in the right corner gets. With the time increasing this allows all the new knowledge to sink in and your character will evolve. From a little html5 all the way into a react frontend master!

## Instructions

1. Open the `index.html` file in your browser, and observe what goes on when you load it.
2. After reading the instructions of the project, **take a look at the provided code**. Don't worry if you don't understand _everything_, but try to get a general feel for what the code is doing. There are extensive comments throughout the code.
3. Once the provided code has been consulted,go through the Assignment section at your own pace.

## Assignment

### 1. Let's make the game actually end

If a Nyan Cat gets to you and eats you, the game keeps going on. Let's fix this!

First, look at the `gameLoop` method of the `Engine`. There's a part of the function that calls `this.isPlayerDead()` to verify if the player has died based on the current situation.

Next, look at the `isPlayerDead` method of the `Engine`. Notice that it's always returning `false`, which means that the player is always reported to be alive.

Here, we are going to rewrite the code of this function to actually check if the player should be dead. We will do this by looping over all the enemies, and checking if their box overlaps the player box.

If at least one enemy overlaps the player, then your function should return `true`. Otherwise it should return `false.

A good strategy would be to `console.log` both `this.player` and `this.enemies`. When you look in the console, you will see that those two objects contain the information necessary to detect a collision.

_HINT:_ In Javascript, the 0,0 position is the _top left_ corner. This means that if an item is at `{x: 0, y: 0}`, it's in the top left, not the bottom left. As `y` values increase, items move down.

_HINT:_ A collision takes place when one of the enemy's boxes overlaps the players. All enemies and players are positioned with `x` and `y` coordinates. There are also helpful constants like `ENEMY_HEIGHT` and `PLAYER_HEIGHT` you can use.

_HINT:_ Try calling `console.log` on the player. You might notice that you don't have all the information you need. Feel free to modify `Player.js` to add some more info to `this`.

### 2. Flavor it!

Having completed the basic section of this project is already great! However, next up is the fun part: customizing and evolving the game. Since this is an open-ended activity, we will give you some suggestions. Feel free to use them or not.

- Increase/change the size of the gameboard.
- Instead of completely stopping the game when it's over, allow the player to start a new game.
- Add a sound track and sound effects to the game.
- Add the possibility of having lives.
- Increase the difficulty level of the game as time passes by making the enemies go faster.
- Allow the enemies and player to have animated sprites instead of the current static ones. You could do this by defining a sprite as an array of images and setting a speed at which these images should switch. This could be implemented in the `render` method.
- Allow the player to shoot bullets at the Nyan Cats.
- Add another type of entity called `Bonus` that will also fall from the sky and add points to the score.
- Make the game more hardcore by allowing the player to also move up/down and making Nyan Cats also shoot from the left of the screen.
- **Don't stop!** These suggestions are only here to get you started :)

## Project Success guidelines

In order for the project to be deemed _successful_ and for you to receive a passing grade

- you need to complete step 1 completely.
- add at least 1 major improvement to the game (that changes the gameplay), and 1 minor improvement (eg. sound effects, "new game" button).

### Submission

- Open a PR, as you normally would, against the parent repository.
- Be sure to add screenshot(s) to the PR.
- Deploy the project to Netlify
  - View this guide: https://docs.google.com/document/d/1J7ff9h77RMrQadgCM54eziW_Rj5_PAHYpQHYjf2ojZU/edit?usp=sharing

### DUE DATE

Your project is due on XX XXX, XXXX by XX:XX.

## Useful Links

- https://javascript.info/keyboard-events
