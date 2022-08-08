/**
 * Expand navigation bar using .style.display = 'none'
 * @param {String || HTMLElement || Undefined} navBar 
 */
function navBarExpand(navBar) {
    navBar = document.getElementById(navBar) || navBar || document.getElementById('navBar');
    console.log(navBar.style.display);
    if (navBar.style.display == 'none') navBar.style.display = 'block';
    else navBar.style.display = 'none';
}