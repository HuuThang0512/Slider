
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const slider = $('.slider')
const sliderMain = $('.slider__main')
const sliderPrevBtn = $('.slider__arrow--prev')
const sliderNextBtn = $('.slider__arrow--next')
const sliderItems = $$('.slider__main-item')
const dotsBLock = $('.slider__dots')
const sliderItemWidth = sliderMain.offsetWidth
console.log("🚀 ~ file: app.js ~ line 11 ~ sliderItemWidth", sliderItemWidth)
const sliderLength = sliderItems.length


var xLength = 0
{
    sliderItems.forEach((e, index) => {
        const template = `<li class="slider__dots-item ${index==0?'is-active':''}" data-index=${index}></li>`
        dotsBLock.insertAdjacentHTML('beforeend', template)
    })
}
const dotItems = $$('.slider__dots-item');
[...dotItems].forEach((dot) => {
    dot.addEventListener('click',function(e) {
        xLength = dot.dataset.index*sliderItemWidth;
        sliderMain.style.transform = `translateX(-${xLength}px)`
        dotActive(xLength)

    })
})
sliderNextBtn.addEventListener('click', function(e) {
    handleChangeSlide(1)
})

sliderPrevBtn.addEventListener('click', function(e) {
    handleChangeSlide(-1)
})

function handleChangeSlide(value = 1) {
    if(value == 1) {
        xLength += sliderItemWidth
        // xLength = 0
        if(xLength > (sliderLength-1) * sliderItemWidth) {
            xLength = (sliderLength-1) * sliderItemWidth
        }
        sliderMain.style.transform = `translateX(-${xLength}px)`
    } else {
        xLength -= sliderItemWidth
        if(xLength < 0) {
            // xLength = (sliderLength-1) * sliderItemWidth
            xLength = 0
        }
        sliderMain.style.transform = `translateX(-${xLength}px)`
    }
    console.log(xLength);
    dotActive(xLength)
}

function dotActive(xLength) {
    const index = xLength/sliderItemWidth;
    [...dotItems].forEach(function(dot) {
        if(dot.classList.contains('is-active')) {
            dot.classList.remove('is-active')
        } 
        if(dot.dataset.index == index) {
            dot.classList.add('is-active')
        }
    })

}
// setInterval(handleChangeSlide,4000)
