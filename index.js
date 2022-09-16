let formSearch = document.querySelector('.form-search');

document.getElementById('search-btn').onclick = () =>{
    formSearch.classList.toggle('active');
    // formSearch.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.getElementById('cart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active');
    formSearch.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.getElementById('user-btn').onclick =() =>{
    loginForm.classList.toggle('active');
    formSearch.classList.remove('active');
    shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.getElementById('menu-btn').onclick =() =>{
   navbar.classList.toggle('active');
   formSearch.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
//    navbar.classList.remove('active');
}

window.onscroll =() =>{
    formSearch.classList.remove('active')
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
 }

 let swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:6500,
        disableInteraction:false,
    },
        centeredSlides:true,
       breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        //spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
       // spaceBetween: 50,
      },
    },
  });

  let handleSwiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:5500,
        disableInteraction:false,
    },
        centeredSlides:true,
       breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        //spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
       // spaceBetween: 50,
      },
    },
  });