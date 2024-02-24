$(document).ready(function() {
    // Define the final positions for each puzzle piece
    var positions = {
        piece1: { top: 0, left: 0 },
        piece2: { top: 0, left: 294 },
        piece3: { top: 0, left: 588 },
        piece4: { top: 196, left: 0 },
        piece5: { top: 196, left: 294 },
        piece6: { top: 196, left: 588 },
        piece7: { top: 392, left: 0 },
        piece8: { top: 392, left: 294 },
        piece9: { top: 392, left: 588 }
    };

    // Function to animate a puzzle piece to its final position
    function animatePiece(pieceId) {
        $('#' + pieceId).animate(positions[pieceId], 1000); // Adjust the duration as needed
    }

    // Function to handle movement of puzzle pieces
    function movePiece(pieceId, movement) {
        var currentPosition = $('#' + pieceId).position();
        var newPosition = { top: currentPosition.top, left: currentPosition.left };

        // Adjust the position based on the movement
        switch (movement) {
            case 'up':
                newPosition.top -= 100; // Move up by 100 pixels
                break;
            case 'down':
                newPosition.top += 100; // Move down by 100 pixels
                break;
            case 'left':
                newPosition.left -= 100; // Move left by 100 pixels
                break;
            case 'right':
                newPosition.left += 100; // Move right by 100 pixels
                break;
            default:
                return; // Do nothing for other movements
        }

        // Animate the movement of the puzzle piece
        animatePiece(pieceId, newPosition);
    }

    // Bind click event handlers to the movement buttons for each puzzle piece
    $('#upButton').click(function() {
        movePiece('piece1', 'up'); // Move piece1 up
    });

    $('#downButton').click(function() {
        movePiece('piece1', 'down'); // Move piece1 down
    });

    $('#leftButton').click(function() {
        movePiece('piece1', 'left'); // Move piece1 left
    });

    $('#rightButton').click(function() {
        movePiece('piece1', 'right'); // Move piece1 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton2').click(function() {
        movePiece('piece2', 'up'); // Move piece2 up
    });

    $('#downButton2').click(function() {
        movePiece('piece2', 'down'); // Move piece2 down
    });

    $('#leftButton2').click(function() {
        movePiece('piece2', 'left'); // Move piece2 left
    });

    $('#rightButton2').click(function() {
        movePiece('piece2', 'right'); // Move piece2 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton3').click(function() {
        movePiece('piece3', 'up'); // Move piece3 up
    });

    $('#downButton3').click(function() {
        movePiece('piece3', 'down'); // Move piece3 down
    });

    $('#leftButton3').click(function() {
        movePiece('piece3', 'left'); // Move piece3 left
    });

    $('#rightButton3').click(function() {
        movePiece('piece3', 'right'); // Move piece3 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton4').click(function() {
        movePiece('piece4', 'up'); // Move piece4 up
    });

    $('#downButton4').click(function() {
        movePiece('piece4', 'down'); // Move piece4 down
    });

    $('#leftButton4').click(function() {
        movePiece('piece4', 'left'); // Move piece4 left
    });

    $('#rightButton4').click(function() {
        movePiece('piece4', 'right'); // Move piece4 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton5').click(function() {
        movePiece('piece5', 'up'); // Move piece5 up
    });

    $('#downButton5').click(function() {
        movePiece('piece5', 'down'); // Move piece5 down
    });

    $('#leftButton5').click(function() {
        movePiece('piece5', 'left'); // Move piece5 left
    });

    $('#rightButton5').click(function() {
        movePiece('piece5', 'right'); // Move piece5 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton6').click(function() {
        movePiece('piece6', 'up'); // Move piece6 up
    });

    $('#downButton6').click(function() {
        movePiece('piece6', 'down'); // Move piece6 down
    });

    $('#leftButton6').click(function() {
        movePiece('piece6', 'left'); // Move piece6 left
    });

    $('#rightButton6').click(function() {
        movePiece('piece6', 'right'); // Move piece6 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton7').click(function() {
        movePiece('piece7', 'up'); // Move piece7 up
    });

    $('#downButton7').click(function() {
        movePiece('piece7', 'down'); // Move piece7 down
    });

    $('#leftButton7').click(function() {
        movePiece('piece7', 'left'); // Move piece7 left
    });

    $('#rightButton7').click(function() {
        movePiece('piece7', 'right'); // Move piece7 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton8').click(function() {
        movePiece('piece8', 'up'); // Move piece8 up
    });

    $('#downButton8').click(function() {
        movePiece('piece8', 'down'); // Move piece8 down
    });

    $('#leftButton8').click(function() {
        movePiece('piece8', 'left'); // Move piece8 left
    });

    $('#rightButton8').click(function() {
        movePiece('piece8', 'right'); // Move piece8 right
    });

    // Repeat the above for other puzzle pieces if needed
    $('#upButton9').click(function() {
        movePiece('piece9', 'up'); // Move piece9 up
    });

    $('#downButton9').click(function() {
        movePiece('piece9', 'down'); // Move piece9 down
    });

    $('#leftButton9').click(function() {
        movePiece('piece9', 'left'); // Move piece9 left
    });

    $('#rightButton9').click(function() {
        movePiece('piece9', 'right'); // Move piece9 right
    });
});
