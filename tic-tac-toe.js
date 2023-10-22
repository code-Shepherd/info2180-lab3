document.addEventListener('DOMContentLoaded', function () {
    // Get all the square elements in the game board
    const squares = document.querySelectorAll('#board div');
  
    // Iterate through each square and add the 'square' class to style them appropriately
    squares.forEach((square) => {
      square.classList.add('square');
    });
  });
  