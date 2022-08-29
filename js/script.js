/*============== SHOW SIDEBAR ================*/
/*===============SIDEBAR SHOW================= */
/*===============SIDEBAR HIDDEN================= */
/*===============SKILLS TAB================= */

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)
            
            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
    })
})
/*===============MIXITUP FILTER ORTFOLIO================= */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
/*===============LINK ACTIVE WORK================= */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))
/*===============LINK ACTIVE WORK================= */
/*===============WORK POPUP================= */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*===============SERVICES MODAL================= */
const modalViews =document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*===============SWIPER TESTIMONIAL================= */
let swiper = new Swiper (".testimonials__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView:2,
            spaceBetween: 48,
        },
    }
});
/*===============INPUT ANIMATION================= */
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent =this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);/*hasta aca hace que al seleccionar el input para escribir, eel placeholder se suba y quede tachado */
    input.addEventListener("blur", blurFunc);
})
/*===============SCROLL SECTION ACTIVE LINK================= */

//esto hace que el bullet de la barra de navegacion lateral vaya acorde con la seccion de la pagina donde se encuentre el usuario
//se va a ir corriendo sola generando un "active", en cada seccion a la que se vaya accediendo


//get all sections that have an id dwefined
const sections = document.querySelectorAll("section[id]");
//add en event listener listening for scroll

window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    //get current scroll position
    let scrollY = window.pageYOffset;
    //now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");
        /* - if our currrent scroll position enters the space where current secion on screen is, add .active class to corresponding
        navigation link, eslse remove it.
        - to know which link needs an active class, we use sectionID variable we are getting while looping through
        sections as an selector*/
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
/*===============SIDEBARSHOW=================*/