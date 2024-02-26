$(document).ready(function() {
    $('.puzzle-piece').each(function() {
        var containerWidth = $('.puzzle-container').width();
        var containerHeight = $('.puzzle-container').height();
        var pieceWidth = $(this).width();
        var pieceHeight = $(this).height();
        var fullImageWidth = $('#full-image-container').outerWidth();
        var instructionTextWidth = $('.instruction-text').outerWidth();
        var randomLeft = Math.floor(Math.random() * (containerWidth - fullImageWidth - pieceWidth));
        var randomTop = Math.floor(Math.random() * (containerHeight - pieceHeight));
        
        $(this).css({
            left: randomLeft,
            top: randomTop
        });
    });

    $('.puzzle-piece').draggable({
        containment: '.puzzle-boundary',
        snap: true,
        snapMode: 'inner',
        snapTolerance: 10
    });

    $('.puzzle-piece').each(function() {
        var randomLeft = $(this).css('left');
        var randomTop = $(this).css('top');
        $(this).animate({
            left: randomLeft,
            top: randomTop
        }, 2000);
    });

    $('body').append('<div class="instruction-text" style="position: absolute; top: 50%; right: 20px; transform: translateY(-50%); font-size: 24px; font-family: Times New Roman, Times, serif;">Please drag the pieces<br>to solve the puzzle<br></div>');
});
