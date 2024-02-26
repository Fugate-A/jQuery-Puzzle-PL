$(document).ready(function() {
    var finalPositions = {
        piece1: { top: 0, left: 0 },
        piece2: { top: 0, left: 300 },
        piece3: { top: 0, left: 600 },
        piece4: { top: 200, left: 0 },
        piece5: { top: Math.random() * 600, left: Math.random() * 900 }, 
        piece6: { top: 200, left: 600 },
        piece7: { top: 400, left: 0 },
        piece8: { top: 400, left: 300 },
        piece9: { top: 400, left: 600 }
    };

    function animatePiece(pieceId, finalPosition) {
        $('#' + pieceId).animate(finalPosition, 2000);
    }

    function movePiece(pieceId, direction, step) {
        var newPosition = { top: '+=0', left: '+=0' };

        switch (direction) {
            case 'up':
                newPosition.top = `-=${step}`;
                break;
            case 'down':
                newPosition.top = `+=${step}`;
                break;
            case 'left':
                newPosition.left = `-=${step}`;
                break;
            case 'right':
                newPosition.left = `+=${step}`;
                break;
            default:
                return;
        }

        $('#' + pieceId).animate(newPosition, 500);
    }

    $('#upButton').click(function() {
        var step = $('#stepSlider').val();
        movePiece('piece5', 'up', step);
    });

    $('#downButton').click(function() {
        var step = $('#stepSlider').val();
        movePiece('piece5', 'down', step);
    });

    $('#leftButton').click(function() {
        var step = $('#stepSlider').val();
        movePiece('piece5', 'left', step);
    });

    $('#rightButton').click(function() {
        var step = $('#stepSlider').val();
        movePiece('piece5', 'right', step);
    });

    $('#stepSlider').on('input', function() {
        $('#stepValue').text($(this).val());
    });

    $('.puzzle-piece').each(function() {
        var pieceId = $(this).attr('id');
        animatePiece(pieceId, finalPositions[pieceId]);
    });
});
