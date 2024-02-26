$(document).ready(function() {
    $('.puzzle-piece').each(function() {
        var containerWidth = $('.puzzle-container').width();
        var containerHeight = $('.puzzle-container').height();
        var pieceWidth = $(this).width();
        var pieceHeight = $(this).height();
        var randomLeft = Math.floor(Math.random() * (containerWidth - pieceWidth));
        var randomTop = Math.floor(Math.random() * (containerHeight - pieceHeight));
        
        $(this).css({
            left: randomLeft,
            top: randomTop
        });
    });

    $('.puzzle-container').append('<div class="instruction-text">Please Drag Pieces</div>');

    $('.puzzle-piece').draggable({
        containment: '.puzzle-container',
        snap: true,
        snapMode: 'inner',
        snapTolerance: 10,
        start: function(event, ui) {
            $('.instruction-text').hide();
        }
    });
});
