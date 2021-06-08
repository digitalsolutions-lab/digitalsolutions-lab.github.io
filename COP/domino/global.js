/* global.js */

/* JQuery 3.6.0 */

// Modal window
$(".main-table__btn-more").click(function () {
    $(this).next().show();
});

$(".main-table__modal-close").click(function () {
    $(this).parent().hide();
});

// Expand / Collapse table
$(".expand-btn__js").click(function () {
    $(".main-table__history-wrapper").toggleClass("closed").toggleClass("open");
    $(this).toggle();
    $(".collapse-btn__js").toggle();
});

$(".collapse-btn__js").click(function () {
    $(".main-table__history-wrapper").toggleClass("open").toggleClass("closed");
    $(this).toggle();
    $(".expand-btn__js").toggle();
});
