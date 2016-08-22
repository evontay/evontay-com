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

// For top-info fade-out on scroll
$(window).scroll(function () {
  $('#top').css('opacity', 1 - $(window).scrollTop() / 350)
})
// For navbar fade-in on scroll
$(window).scroll(function () {
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
    var offset = Math.min(0, wScroll - $('.education-item').offset().top + $(window).height() - 400)
    // $('.education-item').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.proj1').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.education-item').css('opacity', wScroll / $('.education-item').offset().top)
    $('.proj1').css('opacity', wScroll / $('.proj1').offset().top)
  }

  if (wScroll > $('.proj2').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj2').offset().top + $(window).height() - 600)
    $('.proj2').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.proj2').css('opacity', wScroll / $('.proj2').offset().top)
  }

  if (wScroll > $('.proj3').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj3').offset().top + $(window).height() - 600)
    $('.proj3').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.proj3').css('opacity', wScroll / $('.proj3').offset().top)
  }

  if (wScroll > $('.proj4').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj4').offset().top + $(window).height() - 600)
    $('.proj4').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.proj4').css('opacity', wScroll / $('.proj4').offset().top)
  }

  if (wScroll > $('.proj5').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.proj5').offset().top + $(window).height() - 600)
    $('.proj5').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.proj5').css('opacity', wScroll / $('.proj5').offset().top)
  }

  if (wScroll > $('.work').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.work').offset().top + $(window).height() - 600)
    $('.work').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
    $('.work').css('opacity', wScroll / $('.work').offset().top)
  }

  if (wScroll > $('.education').offset().top - $(window).height()) {
    var offset = Math.min(0, wScroll - $('.education').offset().top + $(window).height() - 600)
    $('.education').css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.1) + 'px)'})
  // $('.education').css('opacity', wScroll / $('.education').offset().top)
  }
})
