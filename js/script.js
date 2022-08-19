/*============== SHOW SIDEBAR ================*/
/*===============SIDEBAR SHOW================= */
/*===============SIDEBAR HIDDEN================= */
/*===============SKILLS TAB================= */

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)
            
            tabContent.forEach(tabContent =>{
                tabContent.classList.remove('skills__active')
            })

            target.classList.add('skills__active')


            tab.forEach(tab =>{
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
    linkWork.forEach(L=> I.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(L=> l.addEventListener("click",activeWork))
/*===============LINK ACTIVE WORK================= */
/*===============WORK POPUP================= */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
}
/*===============SERVICES MODAL================= */
/*===============SWIPER TESTIMONIAL================= */
/*===============SIDEBARSHOW================= */
/*===============SIDEBARSHOW=================*/