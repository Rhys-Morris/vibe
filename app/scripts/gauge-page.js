const gaugeElement = document.querySelector(".gauge");

function setGaugeValue (gauge, value) {
  if (value < 0 || value > 360) return;
  gauge.style.transform = `rotate(${value}deg)`;
  // gauge.style.backgroundImage = `linear-gradient(${value}deg, pink, rgb(92,4,92)`;
}

let mouseDown = false;

gaugeElement.addEventListener("mousedown", e=>{
  if (e.button == 0) {
    gaugeElement.addEventListener('mousemove', fillGauge);
    e.preventDefault();
  }
})

function fillGauge(e){
  if (e.buttons == 0) {
    gaugeElement.removeEventListener('mousemove', fillGauge);
  } else {
    let box = document.querySelector(".gauge-fill")
      // console.log(box.getBoundingClientRect())
    let boxCenter = [box.getBoundingClientRect().left + box.offsetWidth/2, box.getBoundingClientRect().top + box.offsetHeight/2]
    // console.log(boxCenter)
    let angle = Math.atan2(e.clientX - boxCenter[0],- (e.clientY- boxCenter[1]) )*(180/Math.PI);
    // console.log(angle/100)
    setGaugeValue(box, angle)
  }
}