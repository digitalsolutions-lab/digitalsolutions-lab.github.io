/* global.js */

/* JQuery 3.6.0 */

// Modal window
$(".main-table__btn-more").click(function () {
    $(this).next().show();
});

$(".main-table__modal-close").click(function () {
    $(this).parent().hide();
});
