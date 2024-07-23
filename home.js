
// ..
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false,
  debounceDelay: 50, 
  throttleDelay: 99, 
  offset: 120,
  delay: 0,
  duration: 1000, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});
function fadein(){
document.querySelectorAll(data-Aos)
 .forEach(element => {
    element.classList.add('fade-in');
    element.classList.remove('fade-out');
    
  });

}
function fadeup(){
document.querySelectorAll(data-Aos)
 .forEach(element => {
    element.classList.add('fade-out');
    element.classList.remove('fade-in');

  });

}
function fadeleft(){
document.querySelectorAll(data-Aos)
 .forEach(element => {
    element.classList.add('fade-out');
    element.classList.add('fade-left');
    element.classList.remove('fade-in');

  });

}
function faderight(){
document.querySelectorAll(data-Aos)
 .forEach(element => {
   element.classList.add('fade-right');
    element.classList.remove('fade-in');
    element.forEach(val,()=>{
        element.classList.remove('fade-right');
        element.classList.remove('fade-out');
        console.dir(document.nodeValue);
    })

  });

}
function fadedown(){
document.querySelectorAll(data-Aos)
 .forEach(element => {
   element.classList.add('fade-right');
    element.classList.remove('fade-in');
    element.forEach(val,()=>{
        element.classList.remove('fade-right');
        element.classList.remove('fade-out');
        console.dir(document.nodeValue);
    })
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element.classList.add('fade-down');
    
}
  });

}
function fadein(){
document.querySelectorAll(data-Aos)
 .forEach(element => {
   element.classList.add('fade-right');
    element.classList.remove('fade-in');
    element.forEach(val,()=>{
        element.classList.remove('fade-right');
        element.classList.remove('fade-out');
        console.dir(document.nodeValue);
    })
while (ElementInternals>= classList("fade-in") && fadein || 4) {
    document.querySelectorAll("data-aos");
    fetch();
}
  });

}

//testimonals
function testimonals(){


let test = document.querySelectorAll("test");
test.forEach((val)=>{
    val.addEventListener('click', ()=>{
        console.log(val.textContent);
        test.classlist.add('fade-up');
        test.classlist.remove('fade-up');
        test.classlist.add('fade-in');
        test.classlist.remove('fade-up');
        test.classlist.add('fade-in');
        test.classlist.remove('fade-down');
        test.classlist.add('fade-down');
        test.classlist.remove('fade-right');
    });


    Aos.init({
        disable: false, 
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false,
        debounceDelay: 50, 
        throttleDelay: 99, 
        offset: 120,
        delay: 0,
        duration: 1000, 
        easing: 'ease',
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom',
    });
});

};


// Ayat
// scripts.js
 document.addEventListener('DOMContentLoaded', () => {
            const quotes = document.querySelectorAll('.quote');
            let currentQuote = 0;

            function changeQuote() {
                quotes[currentQuote].classList.remove('active');
                quotes[currentQuote].classList.add('inactive');

                currentQuote = (currentQuote + 1) % quotes.length;

                quotes[currentQuote].classList.remove('inactive');
                quotes[currentQuote].classList.add('active');
            }

            quotes[currentQuote].classList.add('active');
            setInterval(changeQuote, 3000);
        });


// navbar
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

// slider
document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }

    // Initialize the first slide
    showSlide(currentSlide);

    // Auto slide
    setInterval(nextSlide, 2500);
});
// CEO 
// Optional: Enhance with Intersection Observer for triggering animations
document.addEventListener('DOMContentLoaded', function () {
    const ceoCard = document.getElementById('ceoCard');

    function onScroll() {
        const rect = ceoCard.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            ceoCard.classList.add('active');
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check if the element is already in view on page load
});

// team
const slidesteam = document.querySelector('.slider');
const slideteam = document.querySelector('.card');
const cloneSlidesteam = () => {
    for (let i = 0; i < slidesteam.children.length / 2; i++) {
        let clone = slidesteam.children[i].cloneNode(true);
        slidesteam.appendChild(clone);
    }
};

// Duplicate slides to enable continuous looping
cloneSlidesteam();


//brand-slider
const sliderTrack = document.querySelector('.slider-track-brand');
const slides = Array.from(document.querySelectorAll('.slide-brand'));

const cloneFirstSlide = slides[0].cloneNode(true);
const cloneLastSlide = slides[slides.length - 1].cloneNode(true);

sliderTrack.appendChild(cloneFirstSlide);
sliderTrack.insertBefore(cloneLastSlide, slides[0]);

let index = 1;
let slideWidth = slides[0].offsetWidth;

window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
});

function moveToSlide() {
    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    sliderTrack.style.transform = `translateX(${-slideWidth * index}px)`;
}

setInterval(() => {
    index++;
    moveToSlide();

    if (index >= slides.length + 1) {
        setTimeout(() => {
            sliderTrack.style.transition = 'none';
            index = 1;
            sliderTrack.style.transform = `translateX(${-slideWidth * index}px)`;
        }, 500);
    }
}, 3000);