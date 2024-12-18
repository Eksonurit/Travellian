const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('header');

navBtn.onclick = function () {
    nav.classList.toggle('header-top-row');
};
const crossBtn = document.querySelector('.cross');
 
crossBtn.onclick = function () {
    nav.classList.toggle('header-top-row');
};

const contplaces = document.querySelector('.content-places');
const allCards = Array.from(document.querySelectorAll('.place-card'));
const leftButton = document.querySelector('.destination-left');
const rightButton = document.querySelector('.destination-right');

let cards = [];
let currentIndex = 0;


function getSlideFullWidth(slide) {
    const style = getComputedStyle(slide); 
    const marginLeft = parseFloat(style.marginLeft); 
    const marginRight = parseFloat(style.marginRight); 
    return slide.clientWidth + marginLeft + marginRight; 
}

function adjustSlides() {
    console.log("Ширина вікна: ", window.innerWidth); 
    if (window.innerWidth > 1900) {
        cards = allCards.slice(0, 3);
    } else if (window.innerWidth < 350) {
        cards = allCards.slice(0, 5);
    } else {
        cards = allCards.slice(0, 5); 
    }
    console.log("Кількість слайдів: ", cards.length);  
    currentIndex = Math.min(currentIndex, cards.length - 1); 
    updateSlider();
}

function updateSlider() {
    if (cards.length === 0) return; 
    const slideWidth = getSlideFullWidth(cards[0]); 
    contplaces.style.transform = `translateX(-${currentIndex * slideWidth}px)`; 
}

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    updateSlider();
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});


window.addEventListener('load', adjustSlides);  
window.addEventListener('resize', adjustSlides); 

adjustSlides(); 



const offers = document.querySelector('.Offers-list'); 
const offerCards = Array.from(document.querySelectorAll('.Offer-card')); 
const specialLeft = document.querySelector('.special-left'); 
const specialRight = document.querySelector('.special-right'); 

let Offs = [];
let nowIndex = 0; 

function getFullwidth(cart) {
    const Sty = getComputedStyle(cart); 
    const MarginL = parseFloat(Sty.marginLeft); 
    const MarginR = parseFloat(Sty.marginRight); 
    return cart.clientWidth + MarginL + MarginR; 
}


function adcarts() {
    console.log("Ширина вікна: ", window.innerWidth); 
    if (window.innerWidth < 1900) {
        Offs = offerCards.slice(0, 3); 
        console.log("Кількість слайдів: ", Offs.length); 
        nowIndex = Math.min(nowIndex, Offs.length - 1); 
    } else {
        Offs = []; 
        offers.style.transform = ''; 
    }
}


function updateCart() {
    if (Offs.length === 0) return; 
    const cartWidth = getFullwidth(Offs[0]); 
    offers.style.transform = `translateX(-${nowIndex * cartWidth}px)`; 
}


specialLeft.addEventListener('click', () => {
    nowIndex = (nowIndex > 0) ? nowIndex - 1 : Offs.length - 1; 
    updateCart();
});


specialRight.addEventListener('click', () => {
    nowIndex = (nowIndex < Offs.length - 1) ? nowIndex + 1 : 0; 
    updateCart(); 
});


window.addEventListener('load', adcarts);

window.addEventListener('resize', adcarts);


adcarts();

document.getElementById("toogleButton").addEventListener("click", function() {
    const droptext = document.getElementById("DropText");
    if (droptext.classList.contains("hidden-text")) {
        droptext.classList.remove("hidden-text");
        droptext.classList.add("visible");
        this.innerHTML = `Read Less `;
    } else {
        droptext.classList.remove("visible");
        droptext.classList.add("hidden-text")
        this.innerHTML = `Read More`;
    }
});

const Trip = document.querySelectorAll('.Trip-Image');
const Utrip = document.querySelectorAll('.Under-Image');

function addEventListenersIfLargeScreen() {
  if (window.innerWidth > 1900) {
    Trip.forEach((trip, index) => {
      let isTripMoved = false;


      trip.addEventListener('click', () => {
        const utrip = Utrip[index]; 

        if (isTripMoved) {

          trip.style.transform = 'translateY(0px)';
          if (utrip) {
            utrip.style.transform = 'translateY(0px)';
          }
        } else {

          trip.style.transform = 'translateY(-73px)';
          if (utrip) {
            utrip.style.transform = 'translateY(270px)';
          }
        }
        isTripMoved = !isTripMoved; 
      });
    });
  }
}

addEventListenersIfLargeScreen();


