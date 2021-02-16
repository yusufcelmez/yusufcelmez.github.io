var menu1 = document.getElementById("home-1");
var menu2 = document.getElementById("about-1");
var menu3 = document.getElementById("contact-1");

function menuClick1()
{
    if(menu1.onclick)
    {
        menu1.style.borderBottom = "3px solid";
        menu1.style.borderBottomColor = "#C80B30";
        menu1.style.color = "#C80B30";
        menu2.style.border = "none";
        menu2.style.color = "#D51746";
        menu3.style.border = "none";
        menu3.style.color = "#D51746";
    }
    else
    {
        menu1.style.borderBottom = "none";
    }
}

function menuClick2()
{
    if(menu2.onclick)
    {
        menu1.style.border = "none";
        menu1.style.color = "#D51746";
        menu3.style.border = "none";
        menu3.style.color = "#D51746";
        menu2.style.borderBottom = "3px solid";
        menu2.style.borderBottomColor = "#C80B30";
        menu2.style.color = "#C80B40";
    }

    else
    {
        menu2.style.borderBottom = "none";
    }
}

function menuClick3()
{
    if(menu2.onclick)
    {
        menu1.style.border = "none";
        menu1.style.color = "#D51746";
        menu2.style.border = "none";
        menu2.style.color = "#D51746";
        menu3.style.borderBottom = "3px solid";
        menu3.style.borderBottomColor = "#C80B30";
        menu3.style.color = "#C80B40";
    }

    else
    {
        menu3.style.borderBottom = "none";
    }
}