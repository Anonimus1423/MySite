let mousePressed = false;
let element = null;
const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");

export const mouseDown = (eventElement) =>
{
    mousePressed = true;
    element = eventElement;
}
export const mouseUp = e =>
{
    mousePressed = false;
}
export const mouseMove = e =>
{
    if(mousePressed){
        slide(e)
    }
}
export const slideLeft = elementId =>
{
    document.getElementById(elementId).scrollTo({
        left: document.getElementById(elementId).scrollLeft - 200,
        behavior: "smooth"
    })
}
export const slideRight = elementId =>
{
    document.getElementById(elementId).scrollTo({
        left: document.getElementById(elementId).scrollLeft + 200,
        behavior: "smooth"
    })
}
function slide(e)
{
    if(element && !devices.test(navigator.userAgent))
    {
        element.scrollBy(-e.movementX, 0);
    }
}