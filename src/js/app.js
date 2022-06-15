import * as flsFunctions from "./modules/functions.js";
import { toggleActiveClass } from "./modules/clickEvents.js"
import { dropdownOpen } from "./modules/menu.js"
import resize from "./modules/resize.js"
import { mouseDown, mouseMove, mouseUp, slideLeft, slideRight } from "./modules/slider.js"

window.toggleActiveClass = toggleActiveClass;
window.dropdownOpen = dropdownOpen;
window.onresize = resize;
window.onmouseup = mouseUp;
window.slideRight = slideRight;
window.slideLeft = slideLeft;
window.sliderMouseMove = mouseMove;
flsFunctions.isWebp();

const slider1 = document.getElementById('slider1');
slider1.addEventListener("mousedown", () => mouseDown(slider1))
slider1.addEventListener("mousemove", mouseMove)
slider1.scrollTo(195, 0)

const slider2 = document.getElementById('slider2');
slider2.addEventListener("mousedown", () => mouseDown(slider2))
slider2.addEventListener("mousemove", mouseMove)
