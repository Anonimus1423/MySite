import { dropdownOpen } from "./menu.js"
let isListener = false;
const listener = () => { dropdownOpen('dropdown-background', 'navigation', 'dropdown-icon') };

const resize = () => 
{
    if(window.innerWidth < 1200 && !isListener)
    {
        isListener = true;
        for(let i = 0; i < document.getElementsByClassName("navigation__href").length; i++)
        {
            document.getElementsByClassName("navigation__href")[i].addEventListener("click", listener)
        }
    }
    else if(window.innerWidth >= 1200 && isListener)
    {
        isListener = false;
        for(let i = 0; i < document.getElementsByClassName("navigation__href").length; i++)
        {
            document.getElementsByClassName("navigation__href")[i].removeEventListener("click", listener)
        }
    }
}
resize();
export default resize;