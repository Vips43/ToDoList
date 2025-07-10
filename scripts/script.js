const slides = document.querySelectorAll(".slide")
  var count = 0;

slides.forEach(
  (slide, index) => {
    slide.style.bottom = `${index * 100}%`
    
})

let  slideImag = () => {
  slides.forEach(
    (slide) => {
       slide.style.transform = `translateY(${count * 100}%)`
     }
  )
}
const goPrev = () => {
  if(count < slides.length-1){
  count++
  slideImag()
  }
}
const goNext = () => {
  if(slides != 0){
  count--
  slideImag()
  }
}
