(function () {

    const tabControls = document.querySelector('.tab-conrols')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-conrols__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-conrols__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-conrols__link--active')
        tabContent.classList.add('tab-content--show')

    }

    /*****************menu*******************/

    const menu = document.querySelector('.burger__menu')
    const menuButton = document.querySelector('.burger-icon')

    menuButton.addEventListener('click', openMenu)
    menu.addEventListener('click', closeMenu)

    function openMenu(i) {
        i.preventDefault()
        document.body.classList.toggle('body--opened-menu')
    }

    function closeMenu(i) {
        i.preventDefault()

        const target = i.target

        if (target.closest('.burger-icon') || target.classList.contains('burger__menu')) {
            document.body.classList.remove('body--opened-menu')
        }

    }

    /***********************************************************/
    new Swiper('.image__slider', {

        navigation: {
            nextEl: '.swiperr-button-next',
            prevEl: '.swiperr-button-prev'
        },

        pagination: {
            el: '.swiper-pagination',
        },

        direction: 'vertical',
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
    });


    /**************************************************** */

    const tabControlscontent = document.querySelector('.tab-conrols-2')

    tabControlscontent.addEventListener('click', toggleTabb)

    function toggleTabb(y) {

        const tabControlcontent = y.target.closest('.tab-conrols__link-2')

        if (!tabControlcontent) return
        y.preventDefault()
        if (tabControlcontent.classList.contains('tab-conrols__link--active-2')) return

        const tabbContentID = tabControlcontent.getAttribute('href')
        const tabContentcontent = document.querySelector(tabbContentID)
        const activeControlcontent = document.querySelector('.tab-conrols__link--active-2')
        const activeContentcontent = document.querySelector('.tab-content--show-2')

        if (activeControlcontent) {
            activeControlcontent.classList.remove('tab-conrols__link--active-2')
        }
        if (activeContentcontent) {
            activeContentcontent.classList.remove('tab-content--show-2')
        }

        tabControlcontent.classList.add('tab-conrols__link--active-2')
        tabContentcontent.classList.add('tab-content--show-2')

    }

    /**************************************************** */

    new Swiper('.content-tovar', {

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
    });



    /************************************************************ */

    document.querySelectorAll('.accordion-list__control').forEach((el) => {
        el.addEventListener('click', () => {
            const accordion = el.previousElementSibling;

            if (accordion.style.maxHeight) {
                document.querySelectorAll('.accordion-list-2').forEach((el) => el.style.maxHeight = null)
            } else {
                document.querySelectorAll('.accordion-list-2').forEach((el) => el.style.maxHeight = null)
                accordion.style.maxHeight = accordion.scrollHeight + 'px'
            };

        })
    });

    document.getElementById('myButton').onclick = function () {
        this.textContent = this.textContent == 'Показать меньше' ? 'Показать еще' : 'Показать меньше'
    }


    new Swiper('.brend-slider', {

        navigation: {
            nextEl: '.swiperr-button--next',
            prevEl: '.swiperr-button--prev'
        },

        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,

    });

    /********************************************** */


    document.querySelectorAll('.swiper__control').forEach((er) => {
        er.addEventListener('click', () => {
            const swiperControl = er.previousElementSibling;

            if (swiperControl.style.maxHeight) {
                document.querySelectorAll('.slide__container-2').forEach((er) => er.style.maxHeight = null)
            } else {
                document.querySelectorAll('.slide__container-2').forEach((er) => er.style.maxHeight = null)
                swiperControl.style.maxHeight = swiperControl.scrollHeight + 'px'
            };

        })
    });



    document.getElementById('thisButton-1').onclick = function () {
        this.textContent = this.textContent == 'Скрыть' ? 'Показать все' : 'Скрыть'
    }

    document.getElementById('thisButton-2').onclick = function () {
        this.textContent = this.textContent == 'Скрыть' ? 'Показать все' : 'Скрыть'
    }

    document.getElementById('thisButton-3').onclick = function () {
        this.textContent = this.textContent == 'Скрыть' ? 'Показать все' : 'Скрыть'
    }


    const swapBut = document.querySelectorAll('.swiper__off');
    const swap = document.querySelectorAll('.but');

    swapBut.forEach(elem => {
        elem.addEventListener('click', function () {
            swap.forEach(test => {
                test.style.display = (test.style.display == 'none') ? 'block' : 'none'
            });
        });

    });

    new Swiper('.testimonials__slider', {

        spaceBetween: 50,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.7,
            }
        }
    });


})()

