$(document).ready(function() {
    checkScroll();
    getDate();
});

$(window).scroll(function () {
    checkScroll();
});

function getDate() {
    var today = new Date();
    var year = getFullYear();
    $('#footer').HTML("<p>Copyright &copy Adam Stasiun</p>" + year);
//    var rok = getElementById('#footer');
//    rok.innerHTML('<p>Copyright &copy</p>' + year + '<p>Adam Stasiun</p>')
}

$('.carousel').carousel({
  interval: 2000
})

function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("after-fix");
    } else {
        $('.navbar').removeClass("after-fix");
    }
}