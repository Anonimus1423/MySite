import { toggleActiveClass } from "./clickEvents.js"

let i = 0;
export const dropdownOpen = (...elements) => 
{
    i++;
    toggleActiveClass(...elements);
    if(i % 2 != 0)
    {
        document.body.style = "position: fixed; overflow-y:scroll"
    }
    else
    {
        document.body.style = ""
    }
}