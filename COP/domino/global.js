/* global.js */

/* JQuery 3.6.0 */

// Modal window
$(".main-table__btn-more").click(function (e) {
    console.log($(this).next());
    $(this).next().show();
});

$(".main-table__modal-close").click(function () {
    $(this).parent().hide();
});
