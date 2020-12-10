
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});


$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  responsive: true,
  arrows: false
});
$('.slider-stuff').slick({
  dots: false,
  infinite: true,
  speed: 300,
  responsive: true,
  slidesToShow: 6,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 770,
      settings: {
        centerMode: true,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 430,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    },
    
  ]
});
$('.center').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    }
  ]
});
$('.center2').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    }
  ]
});

