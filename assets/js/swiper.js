
let slider
let activeFilter = "All"

let carsData = document.querySelectorAll("[data-filter]")
const filtersData = document.querySelectorAll(".categories span")

const bus = document.createElement("div")
const swiperWrapper = document.querySelector(".swiper-wrapper")

let normal = []
let deleted = []

function updateSlider() {
  normal = []
  deleted = []

  carsData.forEach((car) => {
    const carFilter = car.getAttribute("data-filter")

    if (carFilter.toLowerCase().indexOf(activeFilter.toLowerCase()) != -1) {
      normal.push(car.cloneNode(true))
    } else {
      deleted.push(car.cloneNode(true))
    }
  })

  if (slider) slider.destroy()

  swiperWrapper.style = ""

  swiperWrapper.innerHTML = ""

  normal.forEach((el) => {
    swiperWrapper.appendChild(el)
  })

  slider = new Swiper(`.swiper-container`, {
    pagination: '.swiper-pagination',
    slidesPerView: 3, 
    slidesPerColumn: 2,
    spaceBetween: 30,
    paginationClickable: true,
    breakpoints: {
      400: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
      },
      762: {
        slidesPerView: 2, 
        slidesPerColumn: 2,
        spaceBetween: 15,
      },
      1370: {
        slidesPerView: 3, 
        slidesPerColumn: 2,
        spaceBetween: 15,
      }
    }
  })
}

function init() {
  activeCarsData = carsData

  bus.innerHTML = ""

  let _bus = []

  carsData.forEach((el) => {
    const clone = el.cloneNode(true)

    _bus.push(clone)
  
    bus.appendChild(clone)
  })

  carsData = _bus

  initFilters()
  updateSlider()
}

function initFilters() {
  filtersData.forEach((filterEl) => {
    const filterData = filterEl.getAttribute("data-filter-button")
  
    filterEl.addEventListener("click", () => {
      activeFilter = filterData
      updateSlider()
    })
  })
}

init()
