$(document).ready(function() {
    // Define the final positions for each puzzle piece
    var finalPositions = {
        piece1: { top: 0, left: 0 },
        piece2: { top: 0, left: 300 },
        piece3: { top: 0, left: 600 },
        piece4: { top: 200, left: 0 },
        piece5: { top: Math.random() * 600, left: Math.random() * 900 }, // Random initial position for piece 5
        piece6: { top: 200, left: 600 },
        piece7: { top: 400, left: 0 },
        piece8: { top: 400, left: 300 },
        piece9: { top: 400, left: 600 }
    };

    // Function to animate a puzzle piece to its final position
    function animatePiece(pieceId, finalPosition) {
        $('#' + pieceId).animate(finalPosition, 2000); // Adjust the duration as needed
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
        movePiece('piece5', 'up');
    });

    $('#downButton').click(function() {
        movePiece('piece5', 'down');
    });

    $('#leftButton').click(function() {
        movePiece('piece5', 'left');
    });

    $('#rightButton').click(function() {
        movePiece('piece5', 'right');
    });

    // Animate puzzle pieces to their final positions
    $('.puzzle-piece').each(function() {
        var pieceId = $(this).attr('id');
        animatePiece(pieceId, finalPositions[pieceId]);
    });
});
