let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".projects-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setTimeout(() => {
        successMessage.classList.add('show');
        form.reset();
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000); 
    }, 1000);
});

function navigateToSection() {
  var searchQuery = document.getElementById("search-box").value.toLowerCase();
  switch (searchQuery) {
      case "home":
          window.location.href = "#home";
          break;
      case "about":
          window.location.href = "#about";
          break;
      case "projects":
          window.location.href = "#projects";
          break;
      case "contact":
          window.location.href = "#contact";
          break;
      default:
          alert("No matching section found.");
          break;
  }
  
  var searchForm = document.querySelector('.header .search-form');
  searchForm.classList.remove('active'); 
  return false;
}

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
}