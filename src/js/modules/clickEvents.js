export const toggleActiveClass = (...elementIds) => 
{
    elementIds.forEach(elementId => 
    {
        document.getElementById(elementId).classList.toggle("active")
    })
}