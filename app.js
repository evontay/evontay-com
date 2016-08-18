$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000)
        return false
      }
    }
  })
  $('#nav').scrollspy()
})

$(window).scroll(function () {
  console.log('hello top-fade')
  $('#top').css('opacity', 1 - $(window).scrollTop() / 350)
})

$(window).scroll(function () {
  console.log('hello navbar')
  if ($(this).scrollTop() > 200) {
    $('#nav').fadeIn()
  } else {
    $('#nav').fadeOut()
  }
})
