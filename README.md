# Tic Tac Toe with Authentication

Tic Tac Toe game with user authentication, a responsive game board and session statistics. 

## Important Links

- [Hosted Site](https://sidhantmathur.github.io/Auth-TicTacToe-client/)
- [API Docs](https://git.generalassemb.ly/ga-wdi-boston/game-project-api)
- [API](https://tic-tac-toe-api-production.herokuapp.com/)

## Development Story
I wanted a tic tac toe game with responsive design and plenty of stat and data tracking so that users could see their performance over time. 

Since I was using an API to manage and update game state, I decided to get all my API elements like authentication running first. Then I designed the game board before embarking on the bulk of the project which was implementing game logic. 

The way that Tic Tac Toe determines the current player is by using a ternary operator that switches player from x to o (and vice versa), and then makes an API call with the player, and their position. 

Win conditions are stored in an array of arrays. Board positions are cross referenced  with the win conditions array using javascript's .every() method. 

On a detected win or tie, the game records the winner, updates the stats table and notifies the user with a prompt that allows them to play again. 

One pitfall in this kind of game includes allowing multiple selections of the same board position which is resolved by disabling the event listener with the jQuery .one() method, or by disabling pointer events. Another is that users will often click on illegal positions, which they need to be notified of and prevented from playing. 

## User Stories
- As a user I want to sign in/sign-up/sign-out
- As a user I want to change my password
- As a user I want to play a game of tic tac toe
- As a user I want to play again after ending the first game
- As a new tic tac toe player I don't want to be able to make illegal moves in tic tac toe
- As an improving tic tac toe player I want to see how many games I've played
- As an improving tic tac toe player I want to see how I'm performing this session. 
- As a user I want to easily tell which square on the board I'm selecting
- As a mobile user I want to have a responsive UI that allows me to play

## Technologies Used

- jQuery
- HTML/CSS/Javascript
- Bootstrap

## Future Development

- Want to implement theming, computer players, custom board sizes, and finishing incomplete games. 
- Working on making DRYer. 
- Working on performance.
- Consolidate win/move actions to single file. 
- Test in unreliable internet environments. 

## Wireframe
[Mobile Wireframe](https://imgur.com/G2kyBzx)
[Desktop Wireframe](https://imgur.com/kBX4uk9)
