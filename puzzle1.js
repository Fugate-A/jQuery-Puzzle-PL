$(document).ready(function() {
    // Define the final positions for each puzzle piece
    var finalPositions = {
        piece1: { top: 0, left: 0 },
        piece2: { top: 0, left: 300 },
        piece3: { top: 0, left: 600 },
        piece4: { top: 200, left: 0 },
        piece5: { top: 200, left: 300 },
        piece6: { top: 200, left: 600 },
        piece7: { top: 400, left: 0 },
        piece8: { top: 400, left: 300 },
        piece9: { top: 400, left: 600 }
    };

    // Randomly select one puzzle piece to start in an incorrect position
    var incorrectPieceId = 'piece' + Math.floor(Math.random() * 9) + 1;
    var incorrectPosition = { top: Math.random() * 700, left: Math.random() * 1000 };
    var finalPiecePosition = finalPositions[incorrectPieceId];
    delete finalPositions[incorrectPieceId];

    // Function to animate a puzzle piece to its final position
    function animatePiece(pieceId, finalPosition) {
        $('#' + pieceId).animate(finalPosition, 2000); // Adjust the duration as needed
    }

    // Function to move a puzzle piece based on the direction
    function movePiece(pieceId, direction) {
        if (pieceId !== incorrectPieceId) return; // Only move the incorrect piece
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

    // Bind click event handlers to the movement buttons for the incorrect piece
    $('#upButton').click(function() {
        movePiece(incorrectPieceId, 'up');
    });

    $('#downButton').click(function() {
        movePiece(incorrectPieceId, 'down');
    });

    $('#leftButton').click(function() {
        movePiece(incorrectPieceId, 'left');
    });

    $('#rightButton').click(function() {
        movePiece(incorrectPieceId, 'right');
    });

    // Animate puzzle pieces to random positions
    $('.puzzle-piece').each(function() {
        var top = Math.random() * 700; // Adjust the range as needed
        var left = Math.random() * 1000; // Adjust the range as needed
        $(this).css({ top: top, left: left });

        // Check if the piece is not the incorrect one
        if ($(this).attr('id') !== incorrectPieceId) {
            // Animate the piece to its final position
            animatePiece($(this).attr('id'), finalPositions[$(this).attr('id')]);
        }
    });
});
