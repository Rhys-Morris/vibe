const gaugeElement1 = document.querySelector(".gauge1");
const gaugeElement2 = document.querySelector(".gauge2");

// let mouseDown = false;

// make the gauge follow the mouse on click

gaugeElement1.addEventListener("click", e => {
  e.preventDefault();
  let box1 = document.querySelector(".gauge-fill1");
  let value = parseFloat(e.clientX)/1000;
  console.log(value)
  if (value > 0 || value > 0.5) {
    box1.style.transform = `rotate(${value}turn)`;
  }
  // console.log(e)
})

gaugeElement2.addEventListener("click", e => {
  e.preventDefault();
  let box2 = document.querySelector(".gauge-fill2");
  let value = parseFloat(e.offsetX)/1000;
  console.log(value)
  if (value > 0 || value > 2) {
    box2.style.transform = `rotate(${value}turn)`;
  }
})

// gaugeElement.addEventListener("mousedown", e=>{
//   if (e.button == 0) {

//     gaugeElement.addEventListener('mousemove', fillGauge);
//     e.preventDefault();
//   }
// })

// function fillGauge(e){
//   if (e.buttons == 0) {
//     gaugeElement.removeEventListener('mousemove', fillGauge);
//   } else {
//     let box = document.querySelector(".gauge-fill")
     
//     console.log(e)
//     let boxCenter = [box.getBoundingClientRect().left + box.offsetWidth/2, box.getBoundingClientRect().top + box.offsetHeight/2]
//     console.log(boxCenter)
//     let angle = Math.atan2(e.clientX - boxCenter[0],- (e.clientY- boxCenter[1]) )*(180/Math.PI);
//     // console.log(angle/100)
//     setGaugeValue(box, angle)
//   }
// }