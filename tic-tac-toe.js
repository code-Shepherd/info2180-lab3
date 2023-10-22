document.addEventListener('DOMContentLoaded', function () {
    // Get all the square elements in the game board
    const squares = document.querySelectorAll('#board div');
  
    // Iterate through each square and add the 'square' class to style them appropriately
    squares.forEach((square) => {
      square.classList.add('square');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; // Initialize the current player as 'X'
  
    // Initialize an empty game state array
    const gameState = ['', '', '', '', '', '', '', '', ''];
  
    // Function to handle square click
    function handleSquareClick(event) {
      const square = event.target;
      const squareIndex = Array.from(squares).indexOf(square);
  
      // Check if the square is empty and the game is not won
      if (gameState[squareIndex] === '' && !checkGameWin()) {
        gameState[squareIndex] = currentPlayer;
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;
  
        // Toggle to the other player (X or O)
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  
        // Check for a win after each move
        if (checkGameWin()) {
          document.getElementById('status').textContent = `Player ${currentPlayer} wins! 🎉`;
          document.getElementById('status').classList.add('you-won');
        }
      }
    }
  
    // Add click event listener to each square
    squares.forEach((square) => {
      square.addEventListener('click', handleSquareClick);
    });
  
    // Function to check if the game has been won
    function checkGameWin() {
      // Define winning combinations
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      // Check if any winning combination is achieved
      for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return true;
        }
      }
  
      return false;
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
  
    const gameState = ['', '', '', '', '', '', '', '', ''];
  
    function handleSquareClick(event) {
      const square = event.target;
      const squareIndex = Array.from(squares).indexOf(square);
  
      if (gameState[squareIndex] === '' && !checkGameWin()) {
        gameState[squareIndex] = currentPlayer;
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  
        if (checkGameWin()) {
          document.getElementById('status').textContent = `Player ${currentPlayer} wins! 🎉`;
          document.getElementById('status').classList.add('you-won');
        }
      }
    }
  
    function handleSquareMouseOver(event) {
      const square = event.target;
      // Apply the 'hover' class when the mouse is over the square
      square.classList.add('hover');
    }
  
    function handleSquareMouseLeave(event) {
      const square = event.target;
      // Remove the 'hover' class when the mouse leaves the square
      square.classList.remove('hover');
    }
  
    squares.forEach((square) => {
      square.addEventListener('click', handleSquareClick);
      square.addEventListener('mouseover', handleSquareMouseOver);
      square.addEventListener('mouseleave', handleSquareMouseLeave);
    });
  
    function checkGameWin() {
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return true;
        }
      }
  
      return false;
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
  
    const gameState = ['', '', '', '', '', '', '', '', ''];
  
    function handleSquareClick(event) {
      const square = event.target;
      const squareIndex = Array.from(squares).indexOf(square);
  
      if (gameState[squareIndex] === '' && !checkGameWin()) {
        gameState[squareIndex] = currentPlayer;
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  
        const winner = checkGameWin();
        if (winner) {
          document.getElementById('status').textContent = `Congratulations! ${winner} is the Winner! 🎉`;
          document.getElementById('status').classList.add('you-won');
        }
      }
    }
  
    function handleSquareMouseOver(event) {
      const square = event.target;
      square.classList.add('hover');
    }
  
    function handleSquareMouseLeave(event) {
      const square = event.target;
      square.classList.remove('hover');
    }
  
    squares.forEach((square) => {
      square.addEventListener('click', handleSquareClick);
      square.addEventListener('mouseover', handleSquareMouseOver);
      square.addEventListener('mouseleave', handleSquareMouseLeave);
    });
  
    function checkGameWin() {
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a]; // Return the winning player (X or O)
        }
      }
  
      return null; // No winner yet
    }
  });
  