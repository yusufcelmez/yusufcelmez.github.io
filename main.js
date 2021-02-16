var menu = document.getElementById("Menu");
var menuBars = document.getElementById("openMenu");
var pageTop = document.getElementById("page-top");
var li = document.querySelectorAll('Menu ul li');

function openMenu()
{
    if(menuBars.onclick)
    {
        menu.classList.toggle("Menu-active");
        menuBars.classList.toggle("close");
    }

    else
    {
        menu.classList.add("Menu-deactive");
        menuBars.classList.remove("close");
    }
}

function closeMenu()
{
    if(li.onclick)
    {
        menu.classList.toggle('Menu-deactive');
        menuBars.classList.add('close');
    }

    else
    {
        menu.classList.toggle('Menu-active');
        menuBars.classList.remove('close');
    }
}

function closeMenuTop()
{
    if(pageTOP.onclick)
    {
        menu.classList.slideToggle('Menu-deactive');
        menuBars.classList.remove('close');
    }
}