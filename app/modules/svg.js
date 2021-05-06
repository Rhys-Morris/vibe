/* Set radius for all circles */
const r = 200;
const circles = document.querySelectorAll(".circle");
const total_circles = circles.length;
for (let i = 0; i < total_circles; i++) {
  circles[i].setAttribute("r", r);
}

/* Set meter's wrapper dimension */
const meter_dimension = r * 2 + 100;
const wrapper = document.querySelector("#wrapper");
const wrapper2 = document.querySelector("#wrapper--2");
wrapper.style.width = meter_dimension + "px";
wrapper.style.height = meter_dimension + "px";
wrapper2.style.width = meter_dimension + "px";
wrapper2.style.height = meter_dimension + "px";

/* Add strokes to circles  */
const cf = 2 * Math.PI * r;
const semi_cf = cf / 2;
const semi_cf_1by3 = semi_cf / 3;
const semi_cf_2by3 = semi_cf_1by3 * 2;

// Set attributes on svg elements

// 1
document
  .querySelector("#outline_curves")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);
document
  .querySelector("#low")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);
document
  .querySelector("#avg")
  .setAttribute("stroke-dasharray", semi_cf_2by3 + "," + cf);
document
  .querySelector("#high")
  .setAttribute("stroke-dasharray", semi_cf_1by3 + "," + cf);
document
  .querySelector("#outline_ends")
  .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));
document
  .querySelector("#mask")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);

// 2
document
  .querySelector("#outline_curves--2")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);
document
  .querySelector("#low--2")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);
document
  .querySelector("#avg--2")
  .setAttribute("stroke-dasharray", semi_cf_2by3 + "," + cf);
document
  .querySelector("#high--2")
  .setAttribute("stroke-dasharray", semi_cf_1by3 + "," + cf);
document
  .querySelector("#outline_ends--2")
  .setAttribute("stroke-dasharray", 2 + "," + (semi_cf - 2));
document
  .querySelector("#mask--2")
  .setAttribute("stroke-dasharray", semi_cf + "," + cf);

/* Bind range slider event*/
const slider = document.querySelector("#slider");
const slider2 = document.querySelector("#slider--2");
const lbl = document.querySelector("#lbl");
const lbl2 = document.querySelector("#lbl--2");
const mask = document.querySelector("#mask");
const mask2 = document.querySelector("#mask--2");

function range_change_event() {
  const percent = this.value;
  console.log(this);
  if (this === slider) {
    const meter_value = semi_cf - (percent * semi_cf) / 100;
    mask.setAttribute("stroke-dasharray", meter_value + "," + cf);
    lbl.textContent = percent + "%";
  } else {
    const meter_value2 = semi_cf - (percent * semi_cf) / 100;
    mask2.setAttribute("stroke-dasharray", meter_value2 + "," + cf);
    lbl2.textContent = percent + "%";
  }
}

slider.addEventListener("input", range_change_event);
slider2.addEventListener("input", range_change_event);
