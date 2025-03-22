document.getElementById("quoteForm").addEventListener("submit", function (e) {
    let isValid = true;

   
    const carReg = document.getElementById("carReg");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");

   
    const carRegError = document.getElementById("carRegError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");

  
    carRegError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";

    
    if (carReg.value.trim().length !== 10) {
      carRegError.textContent = "Car registration must be exactly 10 characters.";
      isValid = false;
    }

   
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile.value.trim())) {
      mobileError.textContent = "Mobile number must be exactly 10 digits.";
      isValid = false;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); 
    }
  });

  
  document.querySelectorAll("#quoteForm input").forEach((input) => {
    input.addEventListener("input", () => {
      document.getElementById(input.id + "Error").textContent = "";
    });
  });


// slider
// $(document).ready(function () {
//     let currentIndex = 0;
//     const slides = $(".slider-wrapper .row");
//     const totalSlides = slides.length;
  
//     function showSlide(index) {
//       slides.hide().eq(index).fadeIn();
//     }
  
//     $("#prevBtn").click(function () {
//       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//       showSlide(currentIndex);
//     });
  
//     $("#nextBtn").click(function () {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       showSlide(currentIndex);
//     });
  
//     // Initialize slider
//     showSlide(currentIndex);
//   });
  

$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});