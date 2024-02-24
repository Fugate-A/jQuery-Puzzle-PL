$(document).ready(function() {
    // Make puzzle pieces draggable
    $('.puzzle-piece').draggable({
        containment: '.puzzle-container',
        snap: true,
        snapMode: 'inner',
        snapTolerance: 10
    });
});
