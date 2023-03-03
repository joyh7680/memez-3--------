$(function(){
    // sc-cart
    $('#cart .tab-list li').click(function(e){
        e.preventDefault();
        const target = $(this).children().attr('href');
        $(this).addClass('on').siblings().removeClass('on');
        $(target).addClass('active').siblings().removeClass('active');
     })

      // sc-login
    $('#login .tab-list li').click(function(e){
        e.preventDefault();
        const target = $(this).children().attr('href');
        $(this).addClass('on').siblings().removeClass('on');
        $(target).addClass('active').siblings().removeClass('active');
     })

    //   goods 
    $('.goods .category-item a').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    })

    //   detail 
    var swiper = new Swiper(".detailSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    //   detail -subMenu
      $('.sc-detail .menu-list li').click(function(e){
        e.preventDefault();
        const target = $(this).children().attr('href');
        $(this).addClass('on').siblings().removeClass('on');
        $(target).addClass('active').siblings().removeClass('active');
    })

    $('.sc-detail #guide dl dt.dt-toggle').click(function(e){

        // 클릭하면 화살표 on , dd  숨겨짐 
        e.preventDefault();
        $(this).toggleClass('on')
        $(this).next().toggleClass('hide')
     
    })

    // .sc-detail #review .review-item

    $('.sc-detail #review .review-item').click(function(e){

      // 클릭하면 화살표 on , dd  숨겨짐 
      e.preventDefault();
      $(this).toggleClass('selected')
      $('.sc-detail #review .desc-box').toggleClass('active')
      
   
  })

    $('.sc-detail .btn-writing').click(function(e){
        e.preventDefault(); 
        alert('로그인하셔야 본 서비스를 이용하실 수 있습니다');
        window.open("../html/login.html", "_self");
        return false;

    })






})