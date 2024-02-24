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
    function animatePiece(pieceId, finalPosition) {
        $('#' + pieceId).animate(finalPosition, 1000); // Adjust the duration as needed
    }

    // Function to move a puzzle piece based on the direction
    function movePiece(pieceId, direction) {
        var newPosition = { top: '+=0', left: '+=0' };

        switch (direction) {
            case 'up':
                newPosition.top = '-=100';
                break;
            case 'down':
                newPosition.top = '+=100';
                break;
            case 'left':
                newPosition.left = '-=100';
                break;
            case 'right':
                newPosition.left = '+=100';
                break;
            default:
                return;
        }

        $('#' + pieceId).animate(newPosition, 500);
    }

    // Bind click event handlers to the movement buttons
    $('#upButton').click(function() {
        movePiece('piece1', 'up');
    });

    $('#downButton').click(function() {
        movePiece('piece1', 'down');
    });

    $('#leftButton').click(function() {
        movePiece('piece1', 'left');
    });

    $('#rightButton').click(function() {
        movePiece('piece1', 'right');
    });

    // Call the animatePiece function for each puzzle piece to move them to their final positions
    $.each(positions, function(pieceId, finalPosition) {
        if (pieceId !== 'piece1') {
            animatePiece(pieceId, finalPosition);
        }
    });
});
