

if (screen && screen.width > 1100) {
  new fullpage('#fullpage', {
    anchors: ['trang-chu', 'trai-tim','tong-quan','vi-tri','ket-noi','tien-ich','dang-cap','cuoc-song','dau-tu','lien-he'],
    menu: '#sectionsNav',
    css3: true,
    navigation: true,
    navigationPosition: 'right',
	      /* verticalCentered: false,
          css3:false*/
	  
   /* navigationTooltips: ['Trang Chủ','Tổng Quan','Vị Trí','Mặt Bằng','Cảm Quan','Tiện Ích','Biệt Thự','Shop House','Chủ Đầu Tư','Liên Hệ'],
*/
    parallax: true,
    scrollingSpeed: 800,
    responsive: 1100,
    responsiveWidth: 1100,
    continuousVertical: false,
    afterRender:function(origin, destination, direction) {
       // #section0 - trang-chu
      if (this.anchor === 'trang-chu') {
        // gsap.fromTo("#section0 .row img", {opacity: 0, scale: 0.3, y: 100}, {opacity: 1, scale: 1, y: 0, duration: 2});
        // gsap.fromTo("#section0 .row h3", {opacity: 0, y: 100}, {opacity: 1,y: 0, duration: 2, delay: 1.5});
      }
    },
    onLeave: function(origin, destination, direction,index) {
    
		
    

   
      if (this.anchor === 'trang-chu' && direction === 'down') {
       gsap.fromTo("#section1 .gsap-text", {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 1});
          gsap.fromTo("#section1 .gsap-text1", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2});
      }
		
   
      if (this.anchor === 'trai-tim' && direction === 'down') {
        // gsap.fromTo("#section2 .gsap-img", {opacity: 0}, {opacity: 1, duration: 3});
        gsap.fromTo("#section2 .gsap-text", {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 1});
		   gsap.fromTo("#section2 .gsap-text1", {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 2});
		   gsap.fromTo("#section2 .gsap-text2", {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: 3});
      }
		
		

    
      if (this.anchor === 'tong-quan' && direction === 'down') {
       
        gsap.fromTo("#section3 .gsap-text", {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 1});
		    gsap.fromTo("#section3 .gsap-text1", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2});
		
      }
		

    
      if (this.anchor === 'vi-tri' && direction === 'down') {
       
         gsap.fromTo("#section4 .gsap-text1", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 1});
		  gsap.fromTo("#section4 .gsap-text", {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 1});
      }

    
      if (this.anchor === 'ket-noi' && direction === 'down') {
   gsap.fromTo("#section5 .gsap-text1", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 3});
		  gsap.fromTo("#section5 .gsap-text", {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 1});
      }
		
		 if (this.anchor === 'tien-ich' && direction === 'down') {
   gsap.fromTo("#section6 .gsap-text1", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 1});
		  gsap.fromTo("#section6 .gsap-text", {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 1});
      }
		
	

    
      if (this.anchor === 'dang-cap' && direction === 'down') {
        gsap.fromTo("#section7 .gsap-text1", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 1});
		  gsap.fromTo("#section7 .gsap-text", {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 1});
		  
	gsap.fromTo("#section7 .gsap-text1", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1});  
        gsap.fromTo("#section7 .gsap-img1", {opacity: 1, y: 100}, {opacity: 1, y: 0, duration: 2});
        gsap.fromTo("#section7 .gsap-img2", {opacity: 1, y: -100}, {opacity: 1, y: 0, duration: 2});
		 gsap.fromTo("#section7 .gsap-img3", {opacity: 1, y: 100}, {opacity: 1, y: 0, duration: 2});
		 gsap.fromTo("#section7 .gsap-img4", {opacity: 1, y: -100}, {opacity: 1, y: 0, duration: 2});
		 gsap.fromTo("#section7 .gsap-img5", {opacity: 1, y: 100}, {opacity: 1, y: 0, duration: 2});
		 gsap.fromTo("#section7 .gsap-img6", {opacity: 1, y: 100}, {opacity: 1, y: 0, duration: 2}); 
      }

		
		if (this.anchor === 'cuoc-song' && direction === 'down') {
        gsap.fromTo("#section8 .gsap-text1", {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 1});  
        gsap.fromTo("#section8 .gsap-img1", {opacity: 1, y: 100}, {opacity: 1, y: 0, duration: 1});
        gsap.fromTo("#section8 .gsap-img2", {opacity: 1, y: 100}, {opacity: 1, y: 0, duration: 3});
		
			
			

      }

  

  

		
			   // #section09 
      if (this.anchor === 'dau-tu' && direction === 'down') {
        gsap.fromTo("#section9 .gsap-top", {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 2});
        gsap.fromTo("#section9 .gsap-bot", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2});
       
      }
		
			   // #section10 
      if (this.anchor === 'lien-he' && direction === 'down') {
        gsap.fromTo("#section10 .gsap-top", {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 2});
        gsap.fromTo("#section10 .gsap-bot", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2});
        gsap.fromTo("#section10 .gsap-right", {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 2});
        gsap.fromTo("#section10 .gsap-left", {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 2});
      }
      
		
		
		
      console.log($(window).width());

    },


  });
}
$(document).ready(function(){

  $("[data-fancybox] ").fancybox({
    thumbs : {
      autoStart : true
    }
  });
	
	
	
	
  $('.slide-sec_slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 autoplay: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
		 autoplay: true,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  }); 
	
	
	
	 $('.slide-sec_slider1').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 autoplay: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
		 autoplay: true,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  }); 
	
	
	
	
	
	
	$('.slide-sec_slider_ha').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 autoplay: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
		 autoplay: true,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  }); 
	
	$('.slide-tv').slick({
    dots: true,
		arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,   
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 autoplay: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
		 autoplay: true,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  }); 
	
	
	$('.slide-sec_slider2').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 autoplay: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
		 autoplay: true,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  }); 
	
	
	
	
	
	$('.slide-sec_slider_ancu').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 autoplay: true,
       dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
		 autoplay: true,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  }); 
	
	
	
  $('.slide-doitac').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // fade: true,
    ssEase: 'linear',
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      }
    ]
  }); 


});



// $(function() {
//   $('#img-maphilight').maphilight({
//       fillColor: 'ebe20c',
//       fillOpacity: 0.4,
//       strokeColor: "ebe20c",
//       strokeWidth: 2,
//       strokeOpacity: 0.6,
//       fade: true,
//       shadow: true,
//       shadowColor: "ffffff"
//   });
// });
// function loadMaps() {
//     $('img[usemap]').mapster({
//         singleSelect: true,
//         clickNavigate: false
//     });
// };





$(document).ready(function () {
    $("#fold").click(function () {
        $("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'Xem thêm') ? 'Thu gọn' : 'Xem thêm').fadeIn();
        })
        // gsap.fromTo("#section1 .gsap-img", {opacity: 0, y: -260}, {opacity: 1, y: -192, duration: 10});
    }) 



});

   
gsap.fromTo("#section10 img.leaf-footer-m.img-footer.gsap-bot.mobile-show", {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: 2});
gsap.fromTo("div#btn-nhanbaogia", {opacity: 0, y: 100, x: 100}, {opacity: 1, y: 0,x: 0, duration: 2, delay: 1});
gsap.fromTo("div#btn-hotline", {opacity: 0, y: 100, x: -100}, {opacity: 1, y: 0,x: 0, duration: 2, delay: 1});


