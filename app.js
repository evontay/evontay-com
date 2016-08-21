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

// For navbar fade-in on scroll
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

// For elements floating into place on scroll
$(window).scroll(function () {
  var wScroll = $(this).scrollTop()

  if (wScroll > $('.education-item').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj1').offset().top + $(window).height() - 300)
    $('.proj1').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'})
  }

  if (wScroll > $('.education-item').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj2').offset().top + $(window).height() - 300)
    $('.proj2').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'})
  }

  if (wScroll > $('.education-item').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj3').offset().top + $(window).height() - 300)
    $('.proj3').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'})
  }

  if (wScroll > $('.education-item').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj4').offset().top + $(window).height() - 300)
    $('.proj4').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'})
  }

  if (wScroll > $('.education-item').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj5').offset().top + $(window).height() - 300)
    $('.proj5').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'})
  }
})
