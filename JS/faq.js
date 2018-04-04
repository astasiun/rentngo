$(document).ready(function () {
    checkScroll();
    getDate();
});

$(window).scroll(function () {
    checkScroll();
});

function getDate() {
    var year = (new Date()).getFullYear()
    $('#footer').append('<p>Copyright &copy; ' + year + ' Adam Stasiun </p>');
}

function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("after-fix");
    } else {
        $('.navbar').removeClass("after-fix");
    }
}

//$('.q1').on('click', function (){
//$(this).closest('p').show();
//});

$('.q1').on('click', '.q1', function() {
    $('#qoneanswer').toggle('p').show();
});
            