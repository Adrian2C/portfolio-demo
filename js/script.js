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
/*===============LINK ACTIVE WORK================= */
/*===============LINK ACTIVE WORK================= */
/*===============WORK POPUP================= */
/*===============SERVICES MODAL================= */
/*===============SWIPER TESTIMONIAL================= */
/*===============SIDEBARSHOW================= */
/*===============SIDEBARSHOW=================*/