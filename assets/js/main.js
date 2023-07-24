
// humberger menu JS

const humbergerIcon = document.querySelector('.mobile-menu-main .outer');
const humbergerInput = document.querySelector('.mobile-menu-main input');
const mainMenu = document.querySelector('#header .navbar');
const menuLink = document.querySelectorAll('#header .navbar .main-menu li a');

const overflowVisible = ()=>{
  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY  = "auto";  
}

humbergerIcon.addEventListener('click',()=>{  
    if(humbergerInput.checked == 0){  
      mainMenu.style.cssText =  'visibility:visible;opacity:1';    
      menuLink.forEach(link=>{
        link.style.cssText  = 'transform:translateX(0%);visibility:visible;opacity:1';
      });
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    }
    else {
      
      mainMenu.style.cssText =  'visibility:hidden;opacity:0';
      menuLink.forEach(link=>{
        link.style.cssText  = 'transform:translateX(100px);visibility:hidden;opacity:0;transition-delay:0s';
      })
      overflowVisible();
      
    }
  
  
});

  window.addEventListener('resize',()=>{
    if(screen.width >= 767){
      overflowVisible();
      mainMenu.style.cssText =  'visibility:visible;opacity:1';
      menuLink.forEach(link=>{
        link.style.cssText  = 'transform:translateX(0%);visibility:visible;opacity:1';
      });
      
    }
    else if (screen.width <= 767) {
      if(humbergerInput.checked == 1){        
          mainMenu.style.cssText =  'visibility:visible;opacity:1';
        menuLink.forEach(link=>{
          link.style.cssText  = 'transform:translateX(0%);visibility:visible;opacity:1';
        });
      }
      else {
        menuLink.forEach(link=>{
          link.style.cssText  = 'transform:translateX(100px);visibility:hidden;opacity:0;transition-delay:0s';
        })
      }
      
    }
    else {
      menuLink.forEach(link=>{
        link.style.cssText  = 'transform:translateX(100px);visibility:hidden;opacity:0;transition-delay:0s';
      })
    }
    
  });


// homepage services slider

if ($(".home-services-slider").length) {
  const slider = $(".home-services-slider");
  let currentSlideElement = $('.slides-no .currentSlide');

      slider.on('init', function(event, slick) {
        updateCurrentSlide(slick.currentSlide);
      });
      
      slider.on('afterChange',function(event, slick, currentSlide){
        updateCurrentSlide(currentSlide);
      });

    slider.slick({
      infinite: true,
        dots: true,
        autoplay: false,      
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function(slider, i) {            
        $('.slides-no .totalSlides').text(slider.slideCount);
        }
    });

    function updateCurrentSlide(currentSlide) {
      currentSlideElement.text(currentSlide + 1);
    };
    
    $('.services-arrow-btn.next-btn').click(function(){
      $(".home-services-slider").slick('slickNext');
    });
    $('.services-arrow-btn.prev-btn').click(function(){
      $(".home-services-slider").slick('slickPrev');      
    });
}

// homepage testimonials slider

if ($(".testimonials-slider").length) {
    $(".testimonials-slider").slick({
      infinite: true,
      dots: false,
      autoplay: false,      
      slidesToShow: 1,
      slidesToScroll: 1,
      

      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        
      ],
    });
    $('.testiminal-arrows.next').click(function(){
      $(".testimonials-slider").slick('slickNext');
    });
    $('.testiminal-arrows.prev').click(function(){
      $(".testimonials-slider").slick('slickPrev');      
    });
}

// homepage brand logo slider

if ($(".brandsSlider").length) {
  $(".brandsSlider").slick({
    infinite: true,
    dots: false,
    autoplay: true,      
    slidesToShow: 5,
    slidesToScroll: 1,
    

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 385,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

// AOS JS

AOS.init(
  {
    once: true,
    disable: window.innerWidth < 768,


  }
);

// animate title words JS

const swiftUpElements = document.querySelectorAll('.animate-title');

if(swiftUpElements){
  swiftUpElements.forEach(elem => {

    const words = elem.textContent.split(' ');
    elem.innerHTML = '';
  
    words.forEach((el, index) => {
      words[index] = `<span><i>${words[index]}</i></span>`;
    });
  
    elem.innerHTML = words.join(' ');
  
    const children = document.querySelectorAll('span > i');
    children.forEach((node, index) => {
      node.style.animationDelay = `${index * .2}s`;
    });
  
  });
}

//  add active class to menu link


const anChor = document.querySelectorAll('.main-menu a');
anChor.forEach(el => {
  let isHash = el.getAttribute('href') == '#';
  let isActive = el.pathname === location.pathname;
  el.closest('li').classList.toggle('active', isActive);
  if (isHash) {
    el.closest('li').classList.remove('active');
  }
  el.addEventListener('click', () => {
    if (isHash) {
      const lis = document.querySelectorAll('.main-menu li');
      lis.forEach(li => {
        li.classList.remove('active');
      })
      el.closest('li').classList.toggle('active', isActive);
    }
  });
});



