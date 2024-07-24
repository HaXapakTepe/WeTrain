document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuItem = document.querySelectorAll('.menu__item')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	menuItem.forEach(item => {
		item.addEventListener('click', toggleMenu)
	})
	document.addEventListener('click', clickOutsideMenu)

	const accordion = document.querySelectorAll('.accordion')

	accordion?.forEach(acc => {
		acc.addEventListener('click', e => {
			e.preventDefault()
			const content = acc.querySelector('.accordion__content')
			if (acc.classList.contains('accordion--active')) {
				acc.classList.remove('accordion--active')
				content.style.maxHeight = '0'
			} else {
				acc.classList.add('accordion--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	})

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

	if (document.querySelector('.platform__swiper')) {
		var platformSwiper = new Swiper('.platform__swiper', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: `.platform__arrow-next`,
				prevEl: `.platform__arrow-prev`,
			},
		})
	}
})
